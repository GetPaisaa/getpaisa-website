'use client'
import React, { useEffect, useState } from "react";
import { Slider, InputNumber, Dropdown } from 'rsuite'; 
import 'rsuite/dist/rsuite.min.css';
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });


const LoanCalculator: React.FC = () => {
    const [loanAmount, setLoanAmount] = useState<number>(500000); 
    const [rate, setRate] = useState<number>(8.5);
    const [year, setYear] = useState<number>(2);
    const [totalAmount, setTotalAmount] = useState<number>(0);
    const [currency, setCurrency] = useState<string>('₹');
    const [currencyTitle, setCurrencyTitle] = useState<string>('INR - ₹');
    const [interest, setInterest] = useState<number>(0);
    const [emi, setEmi] = useState<number>(0);

    const optionsColumnChart:any = {
        options: {
            chart: {
                width: 500,
                type: 'polarArea'
            },
            labels: ['Loan Amount', 'Interest', 'Total Amount'],
            colors: ["#ff0000", "#c758d0", "#d6d6d6", "#007ed6"],
            fill: {
                opacity: 1
            },
            stroke: {
                width: 1,
                colors: undefined
            },
            yaxis: {
                show: false
            },
            legend: {
                position: 'bottom'
            },
            plotOptions: {
                polarArea: {
                    rings: {
                        strokeWidth: 0
                    },
                    spokes: {
                        strokeWidth: 0
                    },
                }
            },
            theme: {
                monochrome: {
                    enabled: true,
                    shadeTo: 'light',
                    shadeIntensity: 0.6
                }
            }
        }
    };
    const seriesColumnChart = [Math.floor(loanAmount), Math.floor(interest), Math.floor(loanAmount + interest)];

    const calculateSIP = () => {
        const r = rate / (12 * 100);
        const n = 12 * year;
        const emi = (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
        const totalAmt = emi * n;
        setEmi(emi);
        setTotalAmount(totalAmt);
        const intrst = totalAmt - loanAmount;
        setInterest(intrst);
    };

    useEffect(() => {
        calculateSIP();
    }, [loanAmount, rate, year]);

    return (
        <div className="bg-primary dark:bg-dark-3 py-10">
            <div className="container">
                <div className="flex justify-center -mx-4">
                    <div className="w-full px-4">
                        <div className="max-w-[510px] mx-auto text-center mb-[70px] wow fadeInUp" data-wow-delay=".2s">
                            <h2 className="font-normal text-3xl sm:text-4xl text-white dark:text-white mb-5">
                                Loan EMI Calculator
                            </h2>
                            <p className="font-normal text-base text-white">
                                Calculate your loan EMI with ease.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="relative overflow-hidden group">
                    <div className="shadow-md bg-white rounded-xl p-3 px-6 py-10 z-20">
                        <div className="md:grid grid-cols-12 gap-2 mt-3">
                            <div className="col-span-7">
                                <div className="flex gap-2 justify-end items-center">
                                    <span className="text-[15px]">Select currency</span>
                                    <Dropdown title={currencyTitle}>
                                        <Dropdown.Item onSelect={() => { setCurrency('₹'); setCurrencyTitle('INR - ₹'); }} key={1}>INR - ₹</Dropdown.Item>
                                        <Dropdown.Item onSelect={() => { setCurrency('$'); setCurrencyTitle('USD - $'); }} key={2}>USD - $</Dropdown.Item>
                                        <Dropdown.Item onSelect={() => { setCurrency('€'); setCurrencyTitle('EUR - €'); }} key={3}>EUR - €</Dropdown.Item>
                                        <Dropdown.Item onSelect={() => { setCurrency('¥'); setCurrencyTitle('JPY - ¥'); }} key={4}>JPY - ¥</Dropdown.Item>
                                        <Dropdown.Item onSelect={() => { setCurrency('¥'); setCurrencyTitle('CNY - ¥'); }} key={5}>CNY - ¥</Dropdown.Item>
                                    </Dropdown>
                                </div>
                                <div className="mt-4">
                                    <div className="grid grid-cols-12 items-center">
                                        <span className="text-[14px] md:text-[18px] col-span-5">Loan Amount</span>
                                        <InputNumber
                                            prefix={currency}
                                            className="col-span-7"
                                            min={10000}
                                            step={1000}
                                            max={10000000}
                                            value={loanAmount}
                                            onChange={value => {
                                                setLoanAmount(Number(value));
                                            }}
                                        />
                                    </div>
                                    <Slider
                                        progress
                                        min={10000}
                                        step={1000}
                                        max={10000000}
                                        style={{ marginTop: 16 }}
                                        value={loanAmount}
                                        onChange={value => {
                                            setLoanAmount(value);
                                        }}
                                    />
                                </div>
                                <div className="mt-10">
                                    <div className="grid grid-cols-12 items-center">
                                        <span className="text-[14px] md:text-[18px] col-span-5">Rate of Interest(p.a)</span>
                                        <InputNumber
                                            postfix="%"
                                            className="col-span-7"
                                            min={1}
                                            step={0.1}
                                            max={50}
                                            value={rate}
                                            onChange={value => {
                                                setRate(Number(value));
                                            }}
                                        />
                                    </div>
                                    <Slider
                                        progress
                                        min={1}
                                        step={0.1}
                                        max={50}
                                        style={{ marginTop: 16 }}
                                        value={rate}
                                        onChange={value => {
                                            setRate(value);
                                        }}
                                    />
                                </div>
                                <div className="mt-10">
                                    <div className="grid grid-cols-12 items-center">
                                        <span className="text-[14px] md:text-[18px] col-span-5">Time Period(years)</span>
                                        <InputNumber
                                            postfix="year"
                                            className="col-span-7"
                                            min={1}
                                            step={1}
                                            max={30}
                                            value={year}
                                            onChange={value => {
                                                setYear(Number(value));
                                            }}
                                        />
                                    </div>
                                    <Slider
                                        progress
                                        min={1}
                                        step={1}
                                        max={30}
                                        style={{ marginTop: 16 }}
                                        value={year}
                                        onChange={value => {
                                            setYear(value);
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="col-span-5">
                                <div className="mt-4 md:mt-0 flex justify-center items-center">
                                    <div className="w-[450px] p-2 h-[300px]"> 
                                        <Chart
                                            options={optionsColumnChart}
                                            series={seriesColumnChart}
                                            type="polarArea"
                                            height={"100%"} width={"100%"}
                                        />
                                    </div>
                                </div>
                                <div className="text-center mt-3">
                                    <span className="text-[18px] font-bold">Monthly EMI -</span> <span className="text-[18px] text-primary font-bold">{currency} {(Math.floor(emi)).toLocaleString("en-IN")}</span>
                                </div>
                            </div>
                        </div>
                        <div className="shadow-sm overflow-hidden my-10">
                            <table className="border-collapse table-Personal w-full text-sm">
                                <thead>
                                    <tr>
                                        <th className="p-4 pt-0 pb-3 text-primary font-normal text-[12px] md:text-[18px] text-left">Loan Amount</th>
                                        <th className="p-4 pt-0 pb-3 text-primary font-normal text-[12px] md:text-[18px] text-center">Interest</th>
                                        <th className="p-4 pt-0 pb-3 text-primary font-normal text-[12px] md:text-[18px] text-right">Total Amount</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white">
                                    <tr>
                                        <td className="border-slate-100 p-4 text-slate-500 font-normal text-[12px] md:text-[18px] text-left">{currency} {(loanAmount).toLocaleString("en-IN")}</td>
                                        <td className="border-slate-100 p-4 text-slate-500 font-normal text-[12px] md:text-[18px] text-center">{currency} {(Math.floor(interest)).toLocaleString("en-IN")}</td>
                                        <td className="border-slate-100 p-4 text-slate-500 font-normal text-[12px] md:text-[18px] text-right">{currency} {(Math.floor(totalAmount)).toLocaleString("en-IN")}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <img className="absolute z-10 -top-2 opacity-95 h-28" src="images1/cta/rose-petals.svg" alt="Rose Petals" />
                    <img className="absolute z-10 -bottom-2 right-0 opacity-95 h-28" src="images1/cta/rose-petals.svg" alt="Rose Petals" />
                    <div className="absolute -top-24 opacity-95 -right-24 opacity-1 group-hover:w-[230px] rotate-45 transition-all w-[250px]">
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#2FADBA" d="M40.8,23.1C27.3,47,-26.9,46.9,-40.5,23C-54.1,-0.8,-27,-48.4,0.1,-48.4C27.1,-48.4,54.3,-0.7,40.8,23.1Z" transform="translate(100 100)" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoanCalculator;
