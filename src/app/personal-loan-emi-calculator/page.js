'use client'
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Slider, InputNumber, Dropdown, Panel, PanelGroup } from 'rsuite';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from "react-chartjs-2";
import 'rsuite/dist/rsuite.min.css';
import Breadcrumbs from "@/components/commons/Breadcrumbs";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

ChartJS.register(ArcElement, Tooltip, Legend);

const SimpleInterestCalculator = () => {
  const [loanAmount, setloanAmount] = useState(100000);
  const [rate, setRate] = useState(8.5);
  const [year, setYear] = useState(2);
  const [totalAmount, setTotalAmount] = useState(0);
  const [currency, setCurrency] = useState('₹');
  const [currencyTitle, setCurrencyTitle] = useState('INR - ₹');
  const [interest, setInterest] = useState(0);
  const [emi, setEmi] = useState(0);

  const optionscolumnchart = {
    options: {
      chart: {
        width: 500,
        type: 'polarArea'
      },
      labels: ['Loan Amount', 'Interest', 'Total Amount'],
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
    <>

      <Header />
      <Breadcrumbs title="Personal Loan EMI Calculator" />
      <div className="mt-3 md:mt-4 container">
        <div className="md:grid grid-cols-12 gap-3 px-4 mx-Personal mb-6">
          <div className="col-span-12">
            <div className='mt-1 mb-2 bg-white border-[#eee] rounded-md shadow-md p-4'>
              <div className="flex justify-between items-center">
                <h1 className="text-[14px] md:text-[22px] font-normal">Personal Loan EMI Calculator</h1>

              </div>

              <hr />

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
                    <span className="text-[18px] text-blue-500 font-bold">Monthly EMI -</span> <span className="text-[18px] text-blue-500 font-bold">{currency} {(Math.floor(emi)).toLocaleString("en-IN")}</span>
                  </div>

                </div>
              </div>

              <div className="shadow-sm overflow-hidden my-10 ">
                <table className="border-collapse table-Personal w-full text-sm">
                  <thead>
                    <tr>
                      <th className="border-b dark:border-slate-600 p-4 pt-0 pb-3 text-blue-500 font-bold dark:text-slate-200  text-[12px] md:text-[18px] text-left">Loan Amount</th>
                      <th className="border-b dark:border-slate-600 p-4 pt-0 pb-3 text-blue-500 font-bold dark:text-slate-200  text-[12px] md:text-[18px] text-center">Interest</th>
                      <th className="border-b dark:border-slate-600 p-4 pt-0 pb-3 text-blue-500 font-bold dark:text-slate-200  text-[12px] md:text-[18px] text-right">Total Amount</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-slate-800">
                    <tr>
                      <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 font-bold text-[12px] md:text-[18px] text-left">{currency} {(Number(loanAmount)).toLocaleString("en-IN")}</td>
                      <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 font-bold text-[12px] md:text-[18px] text-center">{currency} {(Math.floor(interest)).toLocaleString("en-IN")}</td>
                      <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 font-bold text-[12px] md:text-[18px] text-right">{currency} {(Math.floor(Number(totalAmount))).toLocaleString("en-IN")}</td>
                    </tr>

                  </tbody>
                </table>
              </div>

              <div>
                <p className="text-[16px]">Welcome to our comprehensive guide on Personal Loan EMI calculators. At GetPaisa, we understand that buying a bike is a significant investment, and paying for it in one go can be challenging. Therefore, we are here to provide you with all the information you need to know about Personal Loan EMI calculators and how to use them effectively.</p>
              </div>
              <hr></hr>
              <div className="mt-3 mb-4">
                <h4 className="mb-4">Personal Loan EMI Calculator - FAQ</h4>

                <PanelGroup accordion defaultActiveKey={1} bordered>
                  <Panel header="What is a Personal Loan EMI Calculator?" eventKey={1} id="panel1">
                    <p>A Personal Loan EMI calculator is an online tool that helps you calculate your monthly EMI payments on a Personal Loan. This tool uses a simple formula that takes into account the principal loan amount, the interest rate, and the loan tenure to calculate your monthly EMI payments.</p>
                    <br />
                    <p>Using a Personal Loan EMI calculator is essential when planning to purchase a bike through a loan. This tool helps you understand the exact amount you need to pay every month towards your Personal Loan, helping you plan your finances better.</p>
                  </Panel>

                  <Panel header="How to Use a Personal Loan EMI Calculator?" eventKey={2} id="panel2">
                    <p>Using a Personal Loan EMI calculator is easy, and anyone can use it. Follow these simple steps to calculate your Personal Loan EMI:</p>
                    <ul>
                      <li>1. Visit a reputable Personal Loan EMI calculator website like GetPaisa</li>
                      <li>2. Enter the loan amount you require to purchase your bike.</li>
                      <li>3. Enter the interest rate offered by the bank or financial institution.</li>
                      <li>4. Enter the loan tenure in months.</li>
                    </ul>
                  </Panel>

                  <Panel header="How is Personal Loan EMI calculated?" eventKey={2} id="panel2">
                    <p>Personal Loan EMI is calculated using the loan amount, interest rate, and loan tenure. You can use an online Personal Loan EMI calculator to get an estimate of your monthly payments.</p>
                  </Panel>
                  <Panel header="What is the tenure of a Personal Loan?" eventKey={3} id="panel3">
                    <p>{`The tenure of a Personal Loan can range from 1 to 5 years depending on the lender's terms and conditions and the borrower's repayment capacity.`}</p>
                  </Panel>

                  <Panel header="Can I prepay my Personal Loan EMI?" eventKey={4} id="panel4">
                    <p>{`If you miss a Personal Loan EMI payment, the lender may charge you a penalty or late fee. Additionally, it may affect your credit score negatively and make it difficult for you to obtain loans in the future.`}</p>
                  </Panel>

                  <Panel header="Can I change my Personal Loan EMI amount?" eventKey={5} id="panel5">
                    <p>{`Depending on the lender's policies, you may be able to change your Personal Loan EMI amount by either increasing or decreasing it. However, it may affect the loan tenure and the total interest payable.`}</p>
                  </Panel>

                  <Panel header="What happens after I pay off my Personal Loan EMI?" eventKey={6} id="panel6">
                    <p>{`After you pay off your Personal Loan EMI, the lender will issue a loan closure certificate, indicating that you have repaid the loan in full. You will also become the legal owner of the bike.`}</p>
                  </Panel>




                </PanelGroup>

              </div>

            </div>

          </div>

        </div>
      </div>
      <Footer />

    </>
  );
};

export default SimpleInterestCalculator;