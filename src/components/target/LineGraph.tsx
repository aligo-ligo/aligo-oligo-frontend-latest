import { useRef, useEffect } from "react";
import Chart from "chart.js/auto";
import { heroImage } from "../../utils/contants";

const resizeImage = (
	image: HTMLImageElement,
	width: number,
	height: number
) => {
	const canvas = document.createElement("canvas");
	canvas.width = width;
	canvas.height = height;
	const ctx = canvas.getContext("2d");
	if (ctx && image.complete) {
		ctx.drawImage(image, 0, 0, width, height);
	}
	return canvas;
};

const CustomLineChart = () => {
	const chartRef = useRef<HTMLCanvasElement | null>(null);
	const chartInstanceRef = useRef<any>(null);
	const test = [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
		23, 45, 48, 4, 8, 78, 7, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
		15, 16, 17, 18, 19, 20, 21, 23, 45, 48, 4, 8, 78, 7, 10, 1, 2, 3, 4, 5, 6,
		7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 45, 48, 4, 8,
		78, 7, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
		19, 20, 21, 23, 45, 48, 4, 8, 78, 7, 10,
	];

	useEffect(() => {
		const chartCanvas = chartRef?.current?.getContext("2d");
		const image = new Image();
		image.src = heroImage;

		image.onload = () => {
			const resizedImage = resizeImage(image, 30, 30);
			if (chartCanvas) {
				chartInstanceRef.current = new Chart(chartCanvas, {
					type: "line",
					data: {
						labels: test,
						datasets: [
							{
								label: "Sales of the Week",
								data: [30, 6, 9],
								backgroundColor: "aqua",
								borderColor: "aqua",
								fill: false,
								tension: 0.4,
								showLine: true,
								pointStyle: resizedImage,
								pointRadius: 30, // 데이터 포인트의 크기를 0으로 설정하여 숨깁니다.
							},
						],
					},
					options: {
						responsive: true,
						scales: {
							y: {
								ticks: {
									stepSize: 100,
									callback: (value: string | number) => value + "%",
								},
								min: 0,
								max: 100,
							},
							x: {
								grid: {
									display: false,
								},
							},
						},
					},
				});
			}
		};
		return () => {
			if (chartInstanceRef.current) {
				chartInstanceRef.current.destroy();
			}
		};
	}, []);

	return <canvas ref={chartRef} />;
};

export default CustomLineChart;
