'use client'
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { Slider, InputNumber, Dropdown, Panel, PanelGroup } from 'rsuite';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from "react-chartjs-2";
import 'rsuite/dist/rsuite.min.css';
import Footer from "../../components/Footer"; 
import Breadcrumbs from "@/components/commons/Breadcrumbs";

ChartJS.register(ArcElement, Tooltip, Legend);

const SIPCalculator = ({searchdata}) => {
  const [monthlySIP, setMonthlySIP] = useState(5000);
  const [returnRate, setReturnRate] = useState(12);
  const [year, setYear] = useState(4);
  const [totalAmount, setTotalAmount] = useState(0);
  const [currency, setCurrency] = useState('₹');
  const [currencyTitle, setCurrencyTitle] = useState('INR - ₹');


  const data = {
    labels: ['Invested Amount', 'Return', 'Total Amount'],
    datasets: [
      {
        label: `${currencyTitle}`,
        data: [Math.floor(monthlySIP * (12 * year)), Math.floor(totalAmount - monthlySIP * (12 * year)), Math.floor(totalAmount)],
        backgroundColor: [
          '#D64F4F',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)'

        ],
        borderColor: [
          '#D64F4F',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)'
        ],
        borderWidth: 1,
      },
    ],
  };


  const calculateSIP = () => {
    var investment = monthlySIP;
    var monthlyRate = returnRate / 12 / 100;
    var months = year * 12;
    var futureValue = (investment * (1 + monthlyRate) * ((Math.pow((1 + monthlyRate), months)) - 1) / monthlyRate);
    setTotalAmount(futureValue);
  };


  useEffect(() => {
    calculateSIP();
  }, [monthlySIP, returnRate, year]);

  return (
    <>
      <Header />
       <Breadcrumbs title="SIP Calculator"/>
      <div className="mt-3 container md:mt-4">

        <div className="md:grid grid-cols-12 gap-3 px-4 mx-auto mb-6">

          <div className="col-span-12">

            <div className='mt-1 mb-2 bg-white rounded-md shadow-md p-4'>

              <div className="flex justify-between items-center">
                <h1 className="text-[14px] md:text-[22px] font-normal">SIP Calculator</h1>
                 
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
                      <span className="text-[14px] md:text-[18px] col-span-5">Monthly SIP Amount</span>
                      <InputNumber
                        prefix={currency}
                        className="col-span-7"
                        min={100}
                        step={100}
                        max={1000000}
                        value={monthlySIP}
                        onChange={value => {
                          setMonthlySIP(value);
                        }}

                      />
                    </div>

                    <Slider
                      progress
                      min={1000}
                      step={1000}
                      max={10000000}
                      style={{ marginTop: 16 }}
                      defaultValue={monthlySIP}
                      value={monthlySIP}
                      onChange={value => {
                        setMonthlySIP(value);

                      }}

                    />

                  </div>



                  <div className="mt-10">
                    <div className="grid grid-cols-12 items-center">
                      <span className="text-[14px] md:text-[18px] col-span-5">Return rate(%)</span>
                      <InputNumber
                        postfix="%"
                        className="col-span-7"
                        min={1}
                        step={0.1}
                        max={50}
                        value={returnRate}
                        onChange={value => {
                          setReturnRate(value);
                        }}

                      />
                    </div>

                    <Slider
                      progress
                      min={1}
                      step={0.1}
                      max={50}
                      style={{ marginTop: 16 }}
                      value={returnRate}
                      onChange={value => {
                        setReturnRate(value);
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
                    <div className="w-[300px] p-2">
                      <Doughnut data={data} />
                    </div>
                  </div>

                </div>
              </div>

              <div className="shadow-sm overflow-hidden my-10 "> 
                <table className="border-collapse table-auto w-full text-sm">
                  <thead>
                    <tr>
                      <th className="border-b  font-medium p-4 pt-0 pb-3 text-blue-500 font-bold text-left text-[12px] md:text-[18px] text-left">Invested Amount</th>
                      <th className="border-b  font-medium p-4 pt-0 pb-3 text-blue-500 font-bold text-left text-[12px] md:text-[18px] text-center">Estimated Return</th>
                      <th className="border-b  font-medium p-4 pt-0 pb-3 text-blue-500 font-bold text-left text-[12px] md:text-[18px] text-right">Total Amount</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    <tr>
                      <td className="border-b border-slate-100 p-4 text-slate-500 font-bold text-[12px] md:text-[18px] text-left">{currency} {(monthlySIP * (12 * year)).toLocaleString("en-IN")}</td>
                      <td className="border-b border-slate-100 p-4 text-slate-500 font-bold text-[12px] md:text-[18px] text-center">{currency} {(Math.floor(totalAmount - monthlySIP * (12 * year))).toLocaleString("en-IN")}</td>
                      <td className="border-b border-slate-100 p-4 text-slate-500 font-bold text-[12px] md:text-[18px] text-right">{currency} {(Math.floor(totalAmount)).toLocaleString("en-IN")}</td>
                    </tr>

                  </tbody>
                </table>
              </div>

              <div>
                <p className="text-[16px]">{`Systematic Investment Plan (SIP) is a method of investing a fixed amount in a mutual fund scheme at regular intervals (monthly, quarterly, etc.) rather than making a lump sum investment.

SIP helps to average out the cost of investment by investing the same amount at regular intervals, regardless of market conditions. This way, an investor can purchase more units when the market is low and fewer units when the market is high, thus potentially reducing the average cost per unit over time.

SIP is a convenient and hassle-free method of investing, and it also helps to inculcate the habit of regular savings and long-term wealth creation. Additionally, SIP also offers the advantage of ${currencyTitle} cost averaging and the power of compounding.

SIP is best suited for long-term investments and is popular among individual investors as it offers a disciplined approach to investing, helps manage market volatility, and offers the potential for wealth creation over the long term.`}</p>
              </div>
              <hr></hr>
              <div className="mt-3 mb-4">
                <h4 className="mb-4">SIP Calculator - FAQ</h4>

                <PanelGroup accordion defaultActiveKey={1} bordered>
                  <Panel header="What is a SIP?" eventKey={1} id="panel1">
                    <p>A SIP is a method of investing a fixed amount in mutual funds at regular intervals instead of lump sum.</p>
                  </Panel>
                  <Panel header="How does SIP work?" eventKey={2} id="panel2">
                    <p>A SIP works by allowing an investor to invest a fixed amount at regular intervals (e.g. weekly, monthly) in a mutual fund scheme. The amount invested each time is used to purchase units of the fund at the prevailing NAV (Net Asset Value).</p>
                  </Panel>
                  <Panel header="What are the benefits of SIP?" eventKey={3} id="panel3">
                    <p>{`Some of the benefits of SIP include ${currency} cost averaging, disciplined investing, and convenience.`}</p>
                  </Panel>

                  <Panel header="Can I start a SIP with any amount?" eventKey={4} id="panel4">
                    <p>{`Yes, most mutual fund houses have a low minimum SIP amount, as low as ${currency} 500 or ${currency} 1,000 in some cases.`}</p>
                  </Panel>

                  <Panel header="Can I stop a SIP anytime?" eventKey={5} id="panel5">
                    <p>{`Yes, you can stop a SIP anytime by giving a written request to the mutual fund house.`}</p>
                  </Panel>

                  <Panel header="Is SIP taxed?" eventKey={6} id="panel6">
                    <p>{`Yes, SIP returns are taxed as per the investor's tax slab. Short-term capital gains (less than 1 year) are taxed at the investor's marginal tax rate while long-term capital gains (more than 1 year) are taxed at 20% with indexation benefits.`}</p>
                  </Panel>

                  <Panel header="How is the return on SIP calculated?" eventKey={7} id="panel7">
                    <p>{`The return on SIP is calculated based on the difference between the purchase price (NAV) and the redemption price (NAV) of the units over a period of time.`}</p>
                  </Panel>


                </PanelGroup>

              </div>

            </div>

          </div>

        </div>
      
      </div>
      <Footer/>
    </>
  );
};

export default SIPCalculator;