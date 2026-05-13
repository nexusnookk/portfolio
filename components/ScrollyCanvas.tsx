"use client";

import React, { useEffect, useRef, useState } from "react";
import { MotionValue, useTransform, useMotionValueEvent } from "framer-motion";

interface ScrollyCanvasProps {
  scrollYProgress: MotionValue<number>;
}

const FRAME_COUNT = 45;

const generateFrameUrls = () => {
  return Array.from({ length: FRAME_COUNT }, (_, i) =>
    `/sequence/frame_${String(i).padStart(2, "0")}_delay-0.066s.webp`
  );
};

export default function ScrollyCanvas({ scrollYProgress }: ScrollyCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loadedCount, setLoadedCount] = useState(0);
  const [hasLoadedAll, setHasLoadedAll] = useState(false);

  const currentFrameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useEffect(() => {
    const urls = generateFrameUrls();
    const loadedImages: HTMLImageElement[] = [];
    let loaded = 0;

    urls.forEach((url, i) => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        loaded++;
        setLoadedCount(loaded);
        if (loaded === FRAME_COUNT) {
          setHasLoadedAll(true);
        }
      };
      img.onerror = () => {
        loaded++;
        setLoadedCount(loaded);
        if (loaded === FRAME_COUNT) {
          setHasLoadedAll(true);
        }
      };
      loadedImages[i] = img;
    });

    setImages(loadedImages);
  }, []);

  const drawFrame = (index: number) => {
    if (!images[index] || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = images[index];
    const canvasRatio = canvas.width / canvas.height;
    let imgRatio = 1;
    if (img.width && img.height) {
        imgRatio = img.width / img.height;
    }

    let drawWidth = canvas.width;
    let drawHeight = canvas.height;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      drawHeight = canvas.width / imgRatio;
      offsetY = (canvas.height - drawHeight) / 2;
    } else {
      drawWidth = canvas.height * imgRatio;
      offsetX = (canvas.width - drawWidth) / 2;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (img.width && img.height) {
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    } else {
        ctx.fillStyle = "#0d0d0d";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
  };

  useEffect(() => {
    if (!hasLoadedAll) return;
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        drawFrame(Math.round(currentFrameIndex.get()));
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [hasLoadedAll]);

  useMotionValueEvent(currentFrameIndex, "change", (latest) => {
    if (hasLoadedAll) {
      requestAnimationFrame(() => {
        drawFrame(Math.round(latest));
      });
    }
  });

  return (
    <div className="sticky top-0 h-[100svh] w-full overflow-hidden bg-[#0d0d0d]">
      {!hasLoadedAll && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#0d0d0d] z-20">
          <p className="text-white text-xl md:text-2xl font-light tracking-widest">
            LOADING {Math.round((loadedCount / FRAME_COUNT) * 100)}%
          </p>
        </div>
      )}
      <canvas ref={canvasRef} className="h-full w-full object-cover" />
    </div>
  );
}
