import React, { useEffect, useState } from "react";
import Graph from "./Graph/graph";
import "./info.css";

const Info = props => {
  return (
    <section className="info">
      <h1>Coronavirus (COVID-19)</h1>
      <hr />
      <Graph />

      <p>
        <br />
        <h4>What is the coronavirus?</h4>
        The coronavirus belongs to a large family of viruses identified as the
        cause of certain animal diseases and it can cause disease in humans,
        too. The name 'coronavirus' refers to their resemblance to a crown
        ('corona' in Latin) when viewed in an electron microscope. The severity
        of human illness depends on the particular virus strand of this family
        and ranges between mild ailment, such as a cold, up to a serious disease
        that can negatively affect the lungs and lead to multiple organ failure,
        such as the Middle East Respiratory Syndrome (MERS) and Severe Acute
        Respiratory Syndrome (SARS).
      </p>
      <p>
        <h4>What is the 2019 novel coronavirus?</h4>
        The novel coronavirus had not been previously identified as a cause of
        disease in humans. In December 2019, the coronavirus was identified as
        the pathogen causing a cluster of pneumonia cases in Wuhan City, Hubei
        province, central mainland China, and later on, it was found to spread
        to all provinces of mainland China as well as internationally. In terms
        of its genetic makeup, the SARS virus, which was the cause of severe
        morbidity in 2003/4, is the most similar to the novel coronavirus in
        China among all other coronaviruses that cause human morbidity. On
        February 11 2020, the World Health Organization decided on an official
        name for the virus - SARS-CoV-2, and the disease it causes - COVID-19.
        On March 11 2020, the World Health Organization declared the COVID-19
        outbreak was a pandemic.
      </p>
      <p>
        <h4>How is the novel coronavirus transmitted to humans?</h4>
        The vast majority of the first patients in this event either worked in
        the livestock and seafood market in Wuhan or visited it. Hence the
        hypothesis, that the virus spread from animals to human beings, but thus
        far, it was impossible to identify with certainty which animal.
        Currently, the transmission of the virus is from person to person. The
        virus can exit the body from a sick person's respiratory tracts, mainly
        when sneezing or coughing. The dispersed droplets can be inhaled by
        other people or land on surfaces. People who shortly after that inhale
        these droplets or touch these surfaces and subsequently touch their
        mouths, noses, or eyes may become infected. Any person-to-person
        physical contact, such as kissing, hugging, having sex and hand shaking,
        without protection, is potentially infectious. It has yet to be
        determined how infectious this disease is, but at this stage, it seems
        that its level of infection is at least similar to that of the influenza
        virus. It is possible to become infected from patients with very mild
        symptoms.
      </p>
      <p>
        <h4>What are the symptoms of the infection? And how severe is it?</h4>A
        significant part of all people infected with coronavirus do not develop
        symptoms at all. Among the sick, the symptoms of the disease are similar
        to those of influenza. As a matter of fact, it is usually impossible to
        differentiate between infection with the coronavirus and many other
        respiratory illnesses without a specific laboratory test. The most
        common symptoms of the infection are fever, fatigue, and dry coughing.
        One in six patients will develop severe symptoms manifested in labored
        breathing. Older adults, people with chronic diseases such as heart
        condition or diabetes, and people with compromised immune systems tend
        to develop severe symptoms. In the most extreme cases, the infection may
        cause acute pneumonia, severe respiratory syndrome, renal insufficiency,
        and even death. The disease's mortality rate is estimated at about 2% of
        the patients. However, the variance between places is large. Note that
        since many of those infected do not develop any symptoms, it may be
        assumed that the mortality rate among those infected is lower.
      </p>

      <iframe
        width="700"
        height="415"
        src="https://www.youtube.com/embed/LCqpTWrRMGE"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </section>
  );
};

export default Info;
