'use client'
import Script from "next/script";
import { useEffect, useRef, memo } from "react";

interface Props {
    title?: string;
    scriptUrl: string;
    config: Record<string, unknown>;
    height?: number;
    className: string;
}

const TradingViewChart = ({title, scriptUrl, config, height = 600, className}: Props) => {
    const containerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;
        container.innerHTML = `<div class="tradingview-widget-container__widget" style="height:${height}px;width:100%"></div>`;

        const script = document.createElement("script");
        script.src = scriptUrl;
        script.async = true;
        script.innerHTML = JSON.stringify(config);
        container.appendChild(script);
        return () => {
            container.innerHTML = "";
        };
    },[scriptUrl, config, height]);
    return(
        <div className = "w-full">
            {title && <h3 className="font semi-bold text-2xl text-gray-100 mb-5">{title}</h3>}
            <div className={`tradingview-widget-container ${className ?? ""}`} ref={containerRef} />
        </div>
    );

};

export default memo(TradingViewChart);
