import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import { MissionBlockProps } from "./types";
import { Fade } from "react-awesome-reveal";
import Chart from "react-apexcharts";

import {
  MissionBlockContainer,
  Content,
  ContentWrapper,
  ButtonWrapper,
  ServiceWrapper,
  MinPara,
  MinTitle,
} from "./styles";

const MissionBlock = ({
  title,
  content,
  button,
  section,
  second_content,
  icon,
  icon_width,
  icon_height,
  t,
  id,
}: MissionBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  const nftsMarketCap = {
    options: {
      chart: {
        id: "marketcap-nfts",
        fontFamily: 'Josefin Sans Light", sans-serif',

        toolbar: {
          show: false
        }
      },
      colors: ['#0d3b66'],
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'solid',
        opacity: 1
      },

      title: {
        // text: "by market cap",
        style: {
          fontSize: "20px",
          fontWeight: "bold",
          color: "#ee964b",
          fontFamily: 'Josefin Sans Light", sans-serif',
        },
      },
      xaxis: {
        categories: [2017 ,2018, 2019, 2020, 2021],
      },
      yaxis: {
        labels: {
          formatter: function (value: any) {
            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " $";
          }
        },
      }
    },
   
    series: [
      {
        name: "capitalization $",
        data: [30976025, 180219478, 210558198, 315712346, 710890777],
      },
    ],
  };

  const womentInNft = {
    options: {
      labels: ["MALE", "FEMALE "],
      theme: {
        monochrome: {
          enabled: false,
        },
      },
   
      chart: {
        fontFamily: 'Josefin Sans Light", sans-serif'
      },
      title: {
        // text: "by gender",
        style: {
          fontSize: "20px",
          fontWeight: "bold",
          color: "#ee964b",
          fontFamily: 'Josefin Sans Light", sans-serif',
        },
      },
      colors: ["#0d3b66", "#F4D35E"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: "100%",
            },
            legend: {
              show: false,
            },
          },
        },
      ],
    },
    series: [81, 19.2],
  };

  return (
    <MissionBlockContainer id={id}>
      <Fade direction="right">
        <Row justify="space-between" align="middle">
          <Col>
            <ContentWrapper>
              <h1>{t(title)}</h1>
              <Content>{t(content)}</Content>
              <ServiceWrapper>
                <Row justify="space-between">
                  {typeof section === "object" &&
                    section.map((item: any, id: number) => {
                      return (
                        <Col key={id} span={11}>
                          <SvgIcon src={item.icon} width="60px" height="60px" />
                          <MinTitle>{t(item.title)}</MinTitle>
                          <MinPara>{t(item.content)}</MinPara>
                        </Col>
                      );
                    })}
                </Row>
              </ServiceWrapper>
              <ButtonWrapper>
                {typeof button === "object" &&
                  button.map((item: any, id: number) => {
                    return (
                      <Button
                        key={id}
                        color={item.color}
                        fixedWidth={true}
                        onClick={() => scrollTo("about")}
                      >
                        {t(item.title)}
                      </Button>
                    );
                  })}
              </ButtonWrapper>
            </ContentWrapper>
          </Col>
        </Row>
      </Fade>
      <MinTitle>NFT mareket facts</MinTitle>
      <Row align="middle" justify="space-between" >
        <Col xl={12} lg={12} md={24} sm={24} xs={24}>

          <Chart options={nftsMarketCap.options} series={nftsMarketCap.series} type="area" width="100%" height="300px" />    
            Source: ConinMarketcap           
          {/* <Chart
            options={womentInNft.options}
            series={womentInNft.series}
            type="pie"
            width="100%"
            height="300px"
          /> */}
        </Col>
        <Col xl={12} lg={12} md={24} sm={24} xs={24}>
          <Chart
            options={womentInNft.options}
            series={womentInNft.series}
            type="pie"
            width="100%"
            height="300px"
          />
        </Col>
      </Row>
      <ContentWrapper>
      {typeof second_content === "string" && (
                <Content>{t(second_content)}</Content>
              )}
      </ContentWrapper>
    </MissionBlockContainer>
  );
};

export default withTranslation()(MissionBlock);
