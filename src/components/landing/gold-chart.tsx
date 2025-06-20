"use client";

import { useEffect, useRef, useState } from 'react'; // Import useState
import type { EChartsOption, ECharts } from 'echarts';
import { init } from 'echarts';

// Define a type for the fetched gold prices (optional but good practice)
interface GoldPrices {
  per_gram_inr: number;
  per_10_gram_inr: number;
}

export default function GoldChart() {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInstance = useRef<ECharts | null>(null);

  // State to store the fetched gold prices (or historical data for the chart)
  const [chartData, setChartData] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Your MetalpriceAPI key
  // IMPORTANT: For client-side rendering, it's generally NOT recommended to
  // hardcode sensitive API keys directly in the client-side code if they
  // grant extensive access. For a simple display API like MetalpriceAPI's
  // free tier, it might be acceptable for personal use.
  // For production, consider using a Next.js API route to proxy the request
  // from your server, keeping the key secure.
  const METALPRICE_API_KEY = '2453240d62963b8a88bf8085f5a1d453'; // <--- REPLACE THIS WITH YOUR KEY

  // Function to fetch gold price data (this would ideally fetch historical data)
  // For this example, we'll simulate fetching a single "latest" price
  // and then extrapolate it for demonstration, or fetch a few recent data points if your API allows.
  const fetchGoldData = async () => {
    setLoading(true);
    setError(null);
    try {
      // You mentioned you want "per gram" rates for a chart.
      // MetalpriceAPI's 'latest' endpoint gives you the most recent price.
      // For a *chart*, you typically need historical data (e.g., daily prices for the last year/month).
      // MetalpriceAPI has a 'time-series' endpoint for this, but it might be a paid feature beyond the free tier.
      // For this example, let's assume we're fetching historical data if available,
      // or we'll mock it for now.
      
      // *** IMPORTANT: Adjust this URL based on your MetalpriceAPI plan for historical data ***
      // If your free plan doesn't offer time-series, you'll need to mock or manually provide historical data.
      const timeSeriesUrl = `https://api.metalpriceapi.com/v1/time-series?api_key=${METALPRICE_API_KEY}&start_date=2024-06-01&end_date=2025-06-20&base=INR&currencies=XAU`;
      // For demonstration, let's fetch the LATEST price for now and manually create historical data.
      // A more robust solution would fetch actual time-series data.
      const latestPriceUrl = `https://api.metalpriceapi.com/v1/latest?api_key=${METALPRICE_API_KEY}&base=INR&currencies=XAU`;


      const response = await fetch(latestPriceUrl); // Use timeSeriesUrl if your plan supports it
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      if (data.success && data.rates && data.rates.XAU) {
        const xauRatePerInr = data.rates.XAU; // This is XAU per 1 INR
        const goldPriceInrPerTroyOunce = 1 / xauRatePerInr;
        const troyOunceInGrams = 28.3495;
        const goldPriceInrPerGram = goldPriceInrPerTroyOunce / troyOunceInGrams;

        // --- Mocking historical data for demonstration ---
        // In a real scenario, you'd fetch actual historical data points.
        // For example, if you wanted 12 months, you'd make 12 API calls or use a time-series endpoint.
        const currentPrice = round(goldPriceInrPerGram, 2);
        // Simple mock: assume a slight increase over 12 months,
        // with the current month being the fetched price.
        const mockHistoricalData = Array.from({ length: 12 }, (_, i) => {
            // Roughly simulate a past trend, assuming currentPrice is the latest (June)
            // Example: prices were ~700 INR less 11 months ago, increasing gradually.
            const baseValue = currentPrice - (11 - i) * 60; // 60 INR increase per month
            return round(baseValue + (Math.random() - 0.5) * 50, 2); // Add some randomness
        });
        // Ensure the last data point is the fetched current price (for June)
        mockHistoricalData[11] = currentPrice; 
        // --- End of mocking ---


        setChartData(mockHistoricalData);
      } else {
        throw new Error('Gold price data not found in API response.');
      }
    } catch (err) {
      console.error("Failed to fetch gold data:", err);
      setError("Failed to load gold price data.");
      // Fallback to static data or empty to show error
      setChartData([]); 
    } finally {
      setLoading(false);
    }
  };

  // Helper function for rounding
  const round = (value: number, decimals: number) => {
    return Number(Math.round(Number(value + 'e' + decimals)) + 'e-' + decimals);
  };


  // Effect for fetching data on component mount
  useEffect(() => {
    if (typeof window !== 'undefined') { // Ensure window is defined for client-side fetch
      fetchGoldData();
    }
  }, []); // Run once on mount

  // Effect for initializing/updating ECharts
  useEffect(() => {
    // Only initialize/update if data is available and not loading/errored
    if (!loading && !error && chartData.length > 0) {
      const initializeChart = () => {
        if (chartRef.current) {
          if (chartInstance.current) {
            chartInstance.current.dispose();
          }

          chartInstance.current = init(chartRef.current, 'light', { renderer: 'svg' });

          const option: EChartsOption = {
            tooltip: {
              trigger: 'axis',
              backgroundColor: 'rgba(250, 243, 233, 0.9)',
              borderColor: '#DFC58A',
              borderWidth: 1,
              textStyle: {
                color: '#3E2723',
                fontFamily: 'Inter, sans-serif',
              },
              padding: 10,
              formatter: function (params: any) {
                const data = params[0];
                if (data) {
                  const date = data.name;
                  const value = data.value;
                  return `<div>${date}: <strong>₹${value}</strong></div>`;
                }
                return '';
              }
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              top: '5%',
              containLabel: true,
            },
            xAxis: {
              type: 'category',
              boundaryGap: false,
              data: ['July 2024', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan 2025', 'Feb', 'Mar', 'Apr', 'May', 'June'], // Updated month labels for 12 months ending June 2025
              axisLine: { lineStyle: { color: '#DFC58A', width: 1.2 } },
              axisLabel: {
                color: '#BA8759',
                fontFamily: 'Inter, sans-serif',
                margin: 10,
                rotate: 45, // Rotate labels to prevent overlap for longer names
                interval: 0, // Show all labels
              },
            },
            yAxis: {
              type: 'value',
              axisLine: { show: false },
              axisTick: { show: false },
              splitLine: { lineStyle: { color: '#F3E9D2', type: 'dashed' } },
              axisLabel: {
                formatter: '₹{value}',
                color: '#BA8759',
                fontFamily: 'Inter, sans-serif',
                margin: 10,
              },
            },
            series: [
              {
                name: 'Gold Price (per gram)',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 6,
                lineStyle: {
                  width: 3,
                  color: '#DFC58A',
                },
                itemStyle: {
                  color: '#BA8759',
                  borderColor: '#FAF3E9',
                  borderWidth: 2,
                },
                areaStyle: {
                  color: {
                    type: 'linear',
                    x: 0, y: 0, x2: 0, y2: 1,
                    colorStops: [
                      { offset: 0, color: '#DFC58A66' },
                      { offset: 1, color: '#FAF3E911' }
                    ],
                  },
                },
                data: chartData, // Use fetched data here!
              },
            ],
            animationDuration: 1200,
            animationEasing: 'cubicOut',
          };

          chartInstance.current.setOption(option);
          chartInstance.current.resize();
        }
      };

      initializeChart();

      const resizeChart = () => {
        chartInstance.current?.resize();
      };
      window.addEventListener('resize', resizeChart);

      return () => {
        chartInstance.current?.dispose();
        window.removeEventListener('resize', resizeChart);
      };
    }
  }, [chartData, loading, error]); // Re-run effect if chartData, loading, or error changes

  if (loading) {
    return (
      <div className="w-full flex-grow flex items-center justify-center" style={{ minHeight: '300px' }}>
        <p className="text-gray-600">Loading gold price chart...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full flex-grow flex items-center justify-center" style={{ minHeight: '300px' }}>
        <p className="text-red-600">Error: {error}</p>
        <p className="text-gray-500">Please check your API key or try again later.</p>
      </div>
    );
  }

  if (chartData.length === 0) {
      return (
          <div className="w-full flex-grow flex items-center justify-center" style={{ minHeight: '300px' }}>
              <p className="text-gray-500">No gold price data available to display chart.</p>
          </div>
      );
  }


  return (
    <div
      ref={chartRef}
      className="w-full flex-grow"
      style={{
        minHeight: '300px',
      }}
    />
  );
}
