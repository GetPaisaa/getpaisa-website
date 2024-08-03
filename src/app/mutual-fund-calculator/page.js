'use client'
import React, { useEffect, useState } from "react";
import { Slider, InputNumber, Dropdown, Panel, PanelGroup } from 'rsuite';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from "react-chartjs-2";
import 'rsuite/dist/rsuite.min.css';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/commons/Breadcrumbs";


ChartJS.register(ArcElement, Tooltip, Legend);


const MutualFundCalculator = () => {
  const [principal, setPrincipal] = useState(100000);
  const [rate, setRate] = useState(12);
  const [year, setYear] = useState(4);
  const [totalAmount, setTotalAmount] = useState(0);
  const [currency, setCurrency] = useState('₹');
  const [currencyTitle, setCurrencyTitle] = useState('INR - ₹');
  const [interest, setInterest] = useState(0);

  const data = {
    labels: ['Total Investment', 'Interest', 'Total Amount'],
    datasets: [
      {
        label: `${currencyTitle}`,
        data: [Math.floor(Number(principal)), Math.floor(interest), Math.floor(Number(principal)+interest)],
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


  const calculateSIP = () => {
      // var calinterest = (principal*rate*year)/100;
      var final_amount = principal * (1 + rate / 100) ** year;
      setTotalAmount(final_amount);
      var intrst = final_amount - principal;
      setInterest(intrst);
  };


  useEffect(() => {
    calculateSIP();
  }, [principal, rate, year]);

  return (
    <>
      
      <Header />
      <Breadcrumbs title="Mutual Fund Calculator"/>
      <div className="mt-3 md:mt-4 container">


        <div className="md:grid grid-cols-12 gap-3 px-4 mx-auto mb-6">

          <div className="col-span-12">

            <div className='mt-1 mb-2 bg-white rounded-md shadow-md p-4'>

              <div className="flex justify-between items-center">
                <h1 className="text-[14px] md:text-[22px] font-normal">Mutual Fund Calculator</h1>
                
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
                      <span className="text-[14px] md:text-[18px] col-span-5">Total Investment</span>
                      <InputNumber
                        prefix={currency}
                        className="col-span-7"
                        min={100}
                        step={100}
                        max={1000000}
                        value={principal}
                        onChange={value => {
                          setPrincipal(value);
                        }}

                      />
                    </div>

                    <Slider
                      progress
                      min={1000}
                      step={1000}
                      max={10000000}
                      style={{ marginTop: 16 }}
                      defaultValue={principal}
                      value={principal}
                      onChange={value => {
                        setPrincipal(value);

                      }}

                    />

                  </div>



                  <div className="mt-10">
                    <div className="grid grid-cols-12 items-center">
                      <span className="text-[14px] md:text-[18px] col-span-5">Return Rate(p.a)</span>
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
                      <th className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-blue-500 font-bold dark:text-slate-200 text-left text-[12px] md:text-[18px] text-left">Total Investment</th>
                      <th className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-blue-500 font-bold dark:text-slate-200 text-left text-[12px] md:text-[18px] text-center">Interest</th>
                      <th className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-blue-500 font-bold dark:text-slate-200 text-left text-[12px] md:text-[18px] text-right">Total Amount</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-slate-800">
                    <tr>
                      <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 font-bold text-[12px] md:text-[18px] text-left">{currency} {(Number(principal)).toLocaleString("en-IN")}</td>
                      <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 font-bold text-[12px] md:text-[18px] text-center">{currency} {(Math.floor(interest)).toLocaleString("en-IN")}</td>
                      <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 font-bold text-[12px] md:text-[18px] text-right">{currency} {(Math.floor(Number(principal)+interest)).toLocaleString("en-IN")}</td>
                    </tr>

                  </tbody>
                </table>
              </div>

              <div>
                <p className="text-[16px]">A mutual fund is a type of investment vehicle that pools money from multiple investors to invest in a portfolio of securities, such as stocks, bonds, or other assets. The fund is managed by a professional investment manager who selects the securities to be included in the portfolio based on the fund's investment objectives.

When you invest in a mutual fund, you are purchasing shares in the fund, which represents a portion of the fund's holdings. The value of the shares is determined by the net asset value (NAV) of the fund, which is calculated by dividing the total value of the assets in the fund by the number of shares outstanding.

There are many different types of mutual funds, each with its own investment objectives, risk profiles, and asset allocations. Some mutual funds are designed to provide income, while others are focused on growth or capital appreciation. There are also funds that invest in specific sectors, such as technology or healthcare.</p>
              </div>
              <hr></hr>
              <div className="mt-3 mb-4">
                <h4 className="mb-4">Mutual Fund Calculator - FAQ</h4>

                <PanelGroup accordion defaultActiveKey={1} bordered>
                  <Panel header="What is a mutual fund?" eventKey={1} id="panel1">
                    <p>A mutual fund is an investment vehicle that pools money from multiple investors to invest in a portfolio of securities, such as stocks, bonds, or other assets. The fund is managed by a professional investment manager who selects the securities to be included in the portfolio based on the fund's investment objectives.</p>
                  </Panel>
                  <Panel header="How do mutual funds work?" eventKey={2} id="panel2">
                    <p>When you invest in a mutual fund, you are purchasing shares in the fund, which represents a portion of the fund's holdings. The value of the shares is determined by the net asset value (NAV) of the fund, which is calculated by dividing the total value of the assets in the fund by the number of shares outstanding.</p>
                  </Panel>
                  <Panel header="What are the advantages of investing in mutual funds?" eventKey={3} id="panel3">
                    <p>Mutual funds offer several advantages for investors, including diversification, professional management, and ease of access. By investing in a mutual fund, investors can gain exposure to a diversified portfolio of securities with relatively small investments. Additionally, the fund is managed by a professional investment manager, who makes decisions on behalf of the fund's shareholders.</p>
                  </Panel>

                  <Panel header="What are the risks of investing in mutual funds?" eventKey={4} id="panel4">
                    <p>Mutual funds come with risks, including market risk, management risk, and fees. The value of the shares in a mutual fund can fluctuate based on the performance of the securities in the fund's portfolio. Additionally, the investment manager's decisions may not always align with the investor's goals. Mutual funds also charge fees, which can impact the investor's returns.</p>
                  </Panel>

                  <Panel header="How do I choose a mutual fund to invest in?" eventKey={5} id="panel5">
                    <p>Investors should carefully consider the fund's investment objectives, risks, and fees before investing in a mutual fund. Factors to consider when choosing a mutual fund include the fund's performance history, the investment manager's experience and track record, the fund's expense ratio, and the fund's investment strategy and asset allocation.</p>
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

export default MutualFundCalculator;