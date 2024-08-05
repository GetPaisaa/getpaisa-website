'use client'
import React, { useEffect, useState } from "react";
import { Slider, InputNumber, Dropdown, Panel, PanelGroup } from 'rsuite';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from "react-chartjs-2";
import 'rsuite/dist/rsuite.min.css';

import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

ChartJS.register(ArcElement, Tooltip, Legend);

const LoanCalculator = () => {
    const [loanAmount, setloanAmount] = useState(500000);
    const [rate, setRate] = useState(8.5);
    const [year, setYear] = useState(2);
    const [totalAmount, setTotalAmount] = useState(0);
    const [currency, setCurrency] = useState('₹');
    const [currencyTitle, setCurrencyTitle] = useState('INR - ₹');
    const [interest, setInterest] = useState(0);
    const [emi, setEmi] = useState(0);

    const data = {
        labels: ['Loan Amount', 'Interest', 'Total Amount'],
        datasets: [
            {
                label: `${currencyTitle}`,
                data: [Math.floor(Number(loanAmount)), Math.floor(interest), Math.floor(Number(loanAmount) + interest)],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                    '#D64F4F',
                    'rgba(255, 99, 132, 0.2)',


                ],
                borderColor: [

                    'rgba(54, 162, 235, 1)',
                    '#D64F4F',
                    'rgba(255, 99, 132, 1)',

                ],
                borderWidth: 1,
            },
        ],
    };


    const optionscolumnchart = {
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
            }
            ,
            theme: {
                monochrome: {
                    enabled: true,
                    shadeTo: 'light',
                    shadeIntensity: 0.6
                }
            }
        }
    };
    const seriescolumnchart = [Math.floor(Number(loanAmount)), Math.floor(interest), Math.floor(Number(loanAmount) + interest)];


    const calculateSIP = () => {
        const r = rate / (12 * 100);
        const n = 12 * year;
        const emi = (loanAmount * r * (1 + r) ** n) / ((1 + r) ** n - 1);
        const totalamt = emi * n;
        setEmi(emi);
        setTotalAmount(totalamt);
        const intrst = totalamt - loanAmount;
        setInterest(intrst);

    };


    useEffect(() => {
        calculateSIP();
    }, [loanAmount, rate, year]);
    return (
        <div className="bg-gradient-to-l from-gradient-1 to-gradient-2 py-10">
            <div className="container">
                <div className="flex justify-center -mx-4">
                    <div className="w-full px-4">
                        <div
                            className="max-w-[510px] mx-auto text-center mb-[70px] wow fadeInUp"
                            data-wow-delay=".2s"
                        >
                            <h2
                                className="font-normal text-3xl sm:text-4xl text-black dark:text-white mb-5"
                            >
                                Loan EMI Calculator
                            </h2>
                            <p className="font-normal text-base text-body-color">
                                Calculate your loan emi with ease.
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
                                                setloanAmount(value);
                                            }}

                                        />
                                    </div>

                                    <Slider
                                        progress
                                        min={10000}
                                        step={1000}
                                        max={10000000}
                                        style={{ marginTop: 16 }}
                                        defaultValue={loanAmount}
                                        value={loanAmount}
                                        onChange={value => {
                                            setloanAmount(value);

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
                                                setRate(value);
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
                                                setYear(value);
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
                                        {/* <Doughnut data={data} /> */}
                                        <Chart
                                            options={optionscolumnchart}
                                            series={seriescolumnchart}
                                            type="polarArea"
                                            height={"100%"} width={"100%"}
                                        />
                                    </div>
                                </div>
                                <div className="text-center mt-3">
                                    <span className="text-[18px] text-[#4535C1]  font-bold">Monthly EMI -</span> <span className="text-[18px] text-blue-500 text-[#4535C1]  font-bold">{currency} {(Math.floor(emi)).toLocaleString("en-IN")}</span>
                                </div>

                            </div>
                        </div>
                        
                        <div className="shadow-sm overflow-hidden my-10 ">
                            <table className="border-collapse table-Personal w-full text-sm">
                                <thead>
                                    <tr>
                                        <th className=" dark:border-slate-600 p-4 pt-0 pb-3 text-blue-500 font-normal dark:text-slate-200 text-[12px] md:text-[18px] text-left">Loan Amount</th>
                                        <th className=" dark:border-slate-600 p-4 pt-0 pb-3 text-blue-500 font-normal dark:text-slate-200 text-[12px] md:text-[18px] text-center">Interest</th>
                                        <th className=" dark:border-slate-600 p-4 pt-0 pb-3 text-blue-500 font-normal dark:text-slate-200 text-[12px] md:text-[18px] text-right">Total Amount</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white dark:bg-slate-800">
                                    <tr>
                                        <td className=" border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 font-normal text-[12px] md:text-[18px] text-left">{currency} {(Number(loanAmount)).toLocaleString("en-IN")}</td>
                                        <td className=" border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 font-normal text-[12px] md:text-[18px] text-center">{currency} {(Math.floor(interest)).toLocaleString("en-IN")}</td>
                                        <td className=" border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 font-normal text-[12px] md:text-[18px] text-right">{currency} {(Math.floor(Number(totalAmount))).toLocaleString("en-IN")}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <img className="absolute z-10 -top-2 opacity-95 h-28" src="images/cta/rose-petals.svg" />
                    <img className="absolute z-10 -bottom-2 right-0 opacity-95 h-28" src="images/cta/rose-petals.svg" />
                    <div className="absolute -top-24 opacity-95 -right-24 opacity-1 group-hover:w-[230px] rotate-45 transition-all w-[250px]">
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#4535C1" d="M40.8,23.1C27.3,47,-26.9,46.9,-40.5,23C-54.1,-0.8,-27,-48.4,0.1,-48.4C27.1,-48.4,54.3,-0.7,40.8,23.1Z" transform="translate(100 100)" />
                        </svg>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default LoanCalculator