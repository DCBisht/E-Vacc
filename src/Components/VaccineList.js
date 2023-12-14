import React, { useEffect, useState } from "react";
import "../CSS/VaccineList.css";
import VaccineCard from "./VaccineCard";
import { getAllVaccine, useVaccine } from "../api-calls/Helper";

const VaccineList = () => {
  const [vaccineData, setvaccineData] = useState({
    vaccine: [
      {
        name: "TT-1",
        when_to_give: "Early in pregnancy",
        dose: "0.5 ml",
        route: "Intra-muscular",
        site: "Upper Arm",
        description:
          "TT-1, or Tetanus Toxoid 1, is administered early in pregnancy to provide protection against tetanus. This vaccine helps prevent tetanus-related complications during pregnancy and childbirth.",
      },
      {
        name: "TT-2",
        when_to_give: "4 weeks after TT-1*",
        dose: "0.5 ml",
        route: "Intra-muscular",
        site: "Upper Arm",
        description:
          "TT-2, or Tetanus Toxoid 2, is given four weeks after TT-1 to boost the immunity provided by the initial dose. This reinforces protection against tetanus for the expectant mother.",
      },
      {
        name: "TT-Booster",
        when_to_give:
          "If received 2 TT doses in a pregnancy within the last 3 yrs*",
        dose: "0.5 ml",
        route: "Intra-muscular",
        site: "Upper Arm",
        description:
          "The TT-Booster is administered if an individual has received two TT doses in a pregnancy within the last three years. It helps maintain adequate protection against tetanus.",
      },
      {
        name: "BCG",
        when_to_give: "At birth or as early as possible till one year of age",
        dose: "0.1ml (0.05ml until 1 month age)",
        route: "Intra-dermal",
        site: "Left Upper Arm",
        description:
          "The BCG (Bacillus Calmette-Guérin) vaccine is given at birth or as early as possible up to one year of age. It is administered intra-dermally on the left upper arm to protect against tuberculosis.",
      },
      {
        name: "Hepatitis B - Birth dose",
        when_to_give: "At birth or as early as possible within 24 hours",
        dose: "0.5 ml",
        route: "Intra-muscular",
        site: "Antero-lateral side of mid-thigh",
        description:
          "The Hepatitis B Birth Dose is administered at birth or within the first 24 hours to provide early protection against hepatitis B. The vaccine is injected intramuscularly on the antero-lateral side of the mid-thigh.",
      },
      {
        name: "OPV-0",
        when_to_give:
          "At birth or as early as possible within the first 15 days",
        dose: "2 drops",
        route: "Oral",
        site: "Oral",
        description:
          "The OPV-0 (Oral Polio Vaccine) is given at birth or within the first 15 days of life. Administered orally, this vaccine helps protect against polio, a potentially serious viral infection.",
      },
      {
        name: "OPV 1, 2 & 3",
        when_to_give:
          "At 6 weeks, 10 weeks & 14 weeks (OPV can be given till 5 years of age)",
        dose: "2 drops",
        route: "Oral",
        site: "Oral",
        description:
          "OPV 1, 2 & 3 are Oral Polio Vaccine doses given at 6 weeks, 10 weeks, and 14 weeks of age. This vaccine can be administered orally and provides protection against polio up to 5 years of age.",
      },
      {
        name: "Pentavalent 1, 2 & 3",
        when_to_give:
          "At 6 weeks, 10 weeks & 14 weeks (can be given till one year of age)",
        dose: "0.5 ml",
        route: "Intra-muscular",
        site: "Antero-lateral side of mid-thigh",
        description:
          "Pentavalent 1, 2 & 3 are administered at 6 weeks, 10 weeks, and 14 weeks of age. This intra-muscular vaccine provides protection against multiple diseases, including diphtheria, tetanus, pertussis, hepatitis B, and Haemophilus influenzae type b (Hib).",
      },
      {
        name: "Rotavirus#",
        when_to_give:
          "At 6 weeks, 10 weeks & 14 weeks (can be given till one year of age)",
        dose: "5 drops",
        route: "Oral",
        site: "Oral",
        description:
          "The Rotavirus vaccine is administered at 6 weeks, 10 weeks, and 14 weeks of age. Given orally, this vaccine helps protect against rotavirus, a common cause of severe diarrhea in infants and young children.",
      },
      {
        name: "IPV",
        when_to_give: "Two fractional doses at 6 and 14 weeks of age",
        dose: "0.1 ml",
        route: "Intra dermal",
        site: "Right upper arm",
        description:
          "The IPV (Inactivated Polio Vaccine) is given in two fractional doses at 6 and 14 weeks of age. Administered intra-dermally on the right upper arm, this vaccine provides protection against polio.",
      },
      {
        name: "Measles /MR 1st Dose$",
        when_to_give:
          "9 completed months-12 months. (can be given till 5 years of age)",
        dose: "0.5 ml",
        route: "Sub-cutaneous",
        site: "Right upper Arm",
        description:
          "The Measles/MR 1st Dose is given between 9 completed months and 12 months of age. Administered sub-cutaneously on the right upper arm, this vaccine provides protection against measles and rubella.",
      },
      {
        name: "JE - 1**",
        when_to_give: "9 completed months-12 months.",
        dose: "0.5 ml",
        route: "Sub-cutaneous",
        site: "Left upper Arm",
        description:
          "JE - 1 is administered between 9 completed months and 12 months of age. This sub-cutaneous vaccine provides protection against Japanese Encephalitis and is administered on the left upper arm.",
      },
      {
        name: "Vitamin A (1st dose)",
        when_to_give: "At 9 completed months with measlesRubella",
        dose: "1 ml (1 lakh IU)",
        route: "Oral",
        site: "Oral",
        description:
          "The first dose of Vitamin A is given at 9 completed months along with measles and rubella vaccination. Administered orally, this dose provides essential vitamin A to support healthy growth and development.",
      },
      {
        name: "DPT booster-1",
        when_to_give: "16-24 months",
        dose: "0.5 ml",
        route: "Intra-muscular",
        site: "Antero-lateral side of mid-thigh",
        description:
          "DPT Booster-1 is administered between 16 and 24 months of age. This intra-muscular vaccine boosts immunity against diphtheria, pertussis, and tetanus and is given on the antero-lateral side of the mid-thigh.",
      },
      {
        name: "Measles/ MR 2nd dose $",
        when_to_give: "16-24 months",
        dose: "0.5 ml",
        route: "Sub-cutaneous",
        site: "Right upper Arm",
        description:
          "The Measles/MR 2nd Dose is given between 16 and 24 months of age. Administered sub-cutaneously on the right upper arm, this vaccine provides additional protection against measles and rubella.",
      },
      {
        name: "OPV Booster",
        when_to_give: "16-24 months",
        dose: "2 drops",
        route: "Oral",
        site: "Oral",
        description:
          "The OPV Booster is given between 16 and 24 months of age. Administered orally, this booster provides additional protection against polio.",
      },
      {
        name: "JE-2",
        when_to_give: "16-24 months",
        dose: "0.5 ml",
        route: "Sub-cutaneous",
        site: "Left Upper Arm",
        description:
          "JE - 2 is administered between 16 and 24 months of age. This sub-cutaneous vaccine provides a second dose of protection against Japanese Encephalitis and is given on the left upper arm.",
      },
      {
        name: "Vitamin A*** (2nd to 9th dose)",
        when_to_give:
          "16-18 months. Then one dose every 6 months up to the age of 5 years.",
        dose: "2 ml (2 lakh IU)",
        route: "Oral",
        site: "Oral",
        description:
          "Vitamin A*** is given starting at 16-18 months, with subsequent doses every 6 months up to the age of 5 years. Administered orally, this supplement supports healthy vision, immune function, and growth.",
      },
      {
        name: "DPT Booster-2",
        when_to_give: "5-6 years",
        dose: "0.5 ml",
        route: "Intra-muscular",
        site: "Upper Arm",
        description:
          "DPT Booster-2 is administered between 5 and 6 years of age. This intra-muscular vaccine provides a final booster against diphtheria, pertussis, and tetanus, given on the upper arm.",
      },
      {
        name: "TT",
        when_to_give: "10 years & 16 years",
        dose: "0.5 ml",
        route: "Intra-muscular",
        site: "Upper Arm",
        description:
          "TT, or Tetanus Toxoid, is administered at 10 years and 16 years to maintain immunity against tetanus. This intra-muscular vaccine is given on the upper arm.",
      },
    ],
  });
  useEffect(() => {
    getAllVaccine().then((data) => {
      console.log(data);
      setvaccineData(data);
    });
    // console.log(data);
  }, []);
  return (
    <div className="vaccine-list">
      {/* <img src="https://www.optum.com/health-articles/sites/default/files/styles/article_feature/public/images/AgeByAgeGuideToKidsImmunizations-Web-1200x800-72_7.jpg?itok=mmJLu8Po" alt='vaccine'/> */}
      <div className="vaccine-all">
        <h4>
          Hey!! Are you looking for vaccination, Here is the heck, according
          National Immunization Schedule (NIS) for Infants, Children and
          Pregnant Women, should be vaccinated for these.
        </h4>
        <div className="vaccine-List-map">
          {vaccineData.vaccine.map((vaccine, index) => (
            <VaccineCard key={index} vaccine={vaccine} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VaccineList;
