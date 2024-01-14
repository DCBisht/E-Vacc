import React, { useState,useEffect } from "react";
import "../CSS/Home.css";
import BlogCard from "./BlogCard";
import { fetchBlogs } from "../api-calls/Helper";
export default function Home() {
  const [blogs, setBlogs] = useState({
    "status": "ok",
    "totalResults": 70,
    "articles": [
      {
        "source": {
          "id": null,
          "name": "Drug Target Review"
        },
        "author": null,
        "title": "New organoid model of neuroendocrine tumours developed - Drug Target Review",
        "description": "NETs require epidermal growth factor to grow, meaning that inhibiting EGF receptors could treat these types of tumours.",
        "url": "https://www.drugtargetreview.com/news/113144/new-organoid-model-of-neuroendocrine-tumours-developed/",
        "urlToImage": "https://www.drugtargetreview.com/wp-content/uploads/organoid.jpg",
        "publishedAt": "2023-12-13T12:04:37Z",
        "content": "Posted: 13 December 2023 | Drug Target Review | No comments yet\r\nNETs require epidermal growth factor to grow, meaning that inhibiting EGF receptors could treat these types of tumours. \r\nA way to gro… [+2151 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Vox"
        },
        "author": "Dylan Matthews",
        "title": "Why isn’t there a tuberculosis vaccine? - Vox.com",
        "description": "More than a million people die annually from tuberculosis, a bacterial lung disease. Volunteers could speed up the race for a TB cure that works for adults as well as children.",
        "url": "https://www.vox.com/future-perfect/2023/12/13/23998414/tuberculosis-vaccine-m71-human-challenge-trial-volunteers-pandemic",
        "urlToImage": "https://cdn.vox-cdn.com/thumbor/mIT4Rg_Akk8rPMCLpVjljDdNLF8=/0x0:3000x1571/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/25158125/1667722.jpg",
        "publishedAt": "2023-12-13T12:00:00Z",
        "content": "Few forces have killed off talented people before their time with quite the effectiveness of tuberculosis. Theres Chekhov, Chopin, Orwell, Kafka, Keats, Thoreau, Emily Brontë all brought down by the … [+7378 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "YouTube"
        },
        "author": null,
        "title": "What Is The New Synthetic Drug That Causes Holes In The Skin | News Mo - India Today",
        "description": "A new deadly drug called nitazenes has been found in the UK streets. These highly potent and addictive synthetic opioids are being used as adulterants in coc...",
        "url": "https://www.youtube.com/watch?v=VKUZHhCbtK4",
        "urlToImage": "https://i.ytimg.com/vi/VKUZHhCbtK4/maxresdefault.jpg",
        "publishedAt": "2023-12-13T11:46:37Z",
        "content": null
      },
      {
        "source": {
          "id": null,
          "name": "WION"
        },
        "author": "WION Desk",
        "title": "6 Amazing Health Benefits of Drinking Carrot Juice Everyday - WION",
        "description": "6 Amazing Health Benefits of Drinking Carrot Juice Everyday",
        "url": "https://www.wionews.com/web-stories/trending/6-amazing-health-benefits-of-drinking-carrot-juice-everyday-1702465317828",
        "urlToImage": null,
        "publishedAt": "2023-12-13T11:42:28Z",
        "content": "The antioxidants in carrot juice help fight free radicals, promoting healthier skin. Vitamins A and C contribute to collagen production, keeping your skin firm and radiant."
      },
      {
        "source": {
          "id": null,
          "name": "Hindustan Times"
        },
        "author": "HT News Desk",
        "title": "Japan reports first death from mpox: Patient had prior infection with HIV - Hindustan Times",
        "description": "Japan Mpox Death: Mpox was formerly known as monkeypox but renamed due to concerns about racism and stigmatization. | World News",
        "url": "https://www.hindustantimes.com/world-news/japan-reports-first-death-from-mpox-patient-had-prior-infection-with-hiv-101702461216097.html",
        "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/13/1600x900/Mpox-0_1691657341964_1702466498071.jpg",
        "publishedAt": "2023-12-13T11:28:43Z",
        "content": "Japan's health ministry said that a man in his 30s who was living in Saitama Prefecture had died of mpox marking the first such death in the country due to the viral infection. The man suffered from … [+1224 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "YouTube"
        },
        "author": null,
        "title": "Highly contagious Diphtheria case detected at a UK primary school | WION - WION",
        "description": "The case of the highly contagious disease Diphtheria has been confirmed at a primary school in UK's Luton Town. The parents of the students are being warned ...",
        "url": "https://www.youtube.com/watch?v=StyU0qVT1yM",
        "urlToImage": "https://i.ytimg.com/vi/StyU0qVT1yM/maxresdefault.jpg",
        "publishedAt": "2023-12-13T11:23:48Z",
        "content": null
      },
      {
        "source": {
          "id": null,
          "name": "News-Medical.Net"
        },
        "author": null,
        "title": "Can vitamin C reduce the severity of the common cold? - News-Medical.Net",
        "description": "The effect of vitamin C supplementation on common cold severity and duration.",
        "url": "https://www.news-medical.net/news/20231213/Can-vitamin-C-reduce-the-severity-of-the-common-cold.aspx",
        "urlToImage": "https://d2jx2rerrg6sh3.cloudfront.net/images/news/ImageForNews_767005_17024650885234444.jpg",
        "publishedAt": "2023-12-13T11:01:00Z",
        "content": "In a recent meta-analysis published in BMC Public Health, researchers examined 15 comparisons from 10 trials on the effect of vitamin C supplementation on common cold severity and duration.\r\nTheir re… [+5098 chars]"
      },
      {
        "source": {
          "id": "the-times-of-india",
          "name": "The Times of India"
        },
        "author": "TOI News Desk",
        "title": "Indian scientists uncover hidden reservoir of SARS-CoV-2 in body cells, paving way for improved Covid-19 diagnosis | India News - Times of India - IndiaTimes",
        "description": "India News: Scientists at the Institute of Liver and Biliary Sciences in New Delhi have uncovered a potential hidden reservoir of the SARS-CoV-2 virus within body.",
        "url": "https://timesofindia.indiatimes.com/india/indian-scientists-uncover-hidden-reservoir-of-sars-cov-2-in-body-cells-paving-way-for-improved-covid-19-diagnosis/articleshow/105961817.cms",
        "urlToImage": "https://static.toiimg.com/thumb/msid-105961831,width-1070,height-580,imgsize-15652,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
        "publishedAt": "2023-12-13T10:40:21Z",
        "content": "10 avocado recipes that are most popular across the world"
      },
      {
        "source": {
          "id": "the-times-of-india",
          "name": "The Times of India"
        },
        "author": "TIMESOFINDIA.COM",
        "title": "The power of eating these 7 fruits on an empty stomach - IndiaTimes",
        "description": "Learn about the incredible benefits of these fruits, the next step is to include them into your breakfast. These fruits provide a versatile and tasty way to start your day, whether tossed into oatmeal, blended into a smoothie, paired with yogurt, or simply en…",
        "url": "https://timesofindia.indiatimes.com/life-style/health-fitness/diet/the-power-of-eating-these-7-fruits-on-an-empty-stomach/photostory/105938661.cms",
        "urlToImage": "https://static.toiimg.com/photo/105938708.cms",
        "publishedAt": "2023-12-13T10:30:00Z",
        "content": "Enter the small but mighty kiwi, which is full of vitamins, minerals, and enzymes. This fuzzy fruit works wonders for your immunity, skin health, and digestion. The fruit can improve your immunity an… [+336 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Jagran.com"
        },
        "author": "Prerna Targhotra",
        "title": "Is Loss Of Appetite Sign Of Stomach Cancer Know Symptoms And Early Diagnosis From Expert - Jagran English",
        "description": "Stomach Cancer Symptoms And Diagnosis: Early detection of stomach cancer is critical for effective treatment. If persistent loss of appetite or other concerning symptoms arise, individuals should consult a healthcare professional promptly.",
        "url": "https://english.jagran.com/lifestyle/is-loss-of-appetite-sign-of-stomach-cancer-know-symptoms-and-early-diagnosis-from-expert-10120096",
        "urlToImage": "https://imgeng.jagran.com/images/2023/dec/is-loss-of-appetite-sign-of-stomach-cancer1702463652789.jpg",
        "publishedAt": "2023-12-13T10:30:00Z",
        "content": "Stomach Cancer Symptoms And Diagnosis: Also known as gastric cancer, stomach cancer involves the growth of cells beginning in the stomach and can happen in any part of the stomach. Once stomach cance… [+2938 chars]"
      },
      {
        "source": {
          "id": "the-times-of-india",
          "name": "The Times of India"
        },
        "author": "ET HealthWorld",
        "title": "Over 30 per cent dengue seroprevalence among Kerala's children, Lancet study finds - ETHealthWorld",
        "description": "A study published in The Lancet Regional Health - Southeast Asia journal has found a dengue seroprevalence of 30.9 per cent among children aged 9-12 and 24.6 per cent in 5-8-year-olds in Kerala, categorising it as low to moderate. The study unveils a nuanced …",
        "url": "https://health.economictimes.indiatimes.com/news/industry/over-30-per-cent-dengue-seroprevalence-among-keralas-children-lancet-study-finds/105961257",
        "urlToImage": "https://etimg.etb2bimg.com/thumb/msid-105961257,imgsize-11214,width-1200,height=765,overlay-ethealth/industry/over-30-per-cent-dengue-seroprevalence-among-keralas-children-lancet-study-finds.jpg",
        "publishedAt": "2023-12-13T10:25:14Z",
        "content": "New Delhi: A study published in The Lancet Regional Health - Southeast Asia journal has found a dengue seroprevalence of 30.9 per cent among children aged 9-12 and 24.6 per cent in 5-8-year-olds in K… [+2120 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "NDTV News"
        },
        "author": null,
        "title": "New Asthma Treatment Offers Hope With Reduced Steroid Dependence - NDTV",
        "description": "Research indicates that severe asthma can be managed effectively through biologic therapies, eliminating the need for additional high-dose inhaled steroids with potential significant side effects.",
        "url": "https://www.ndtv.com/science/new-asthma-treatment-offers-hope-with-reduced-steroid-dependence-4666144",
        "urlToImage": "https://c.ndtvimg.com/2021-05/et4aqdkg_asthma_625x300_04_May_21.jpg",
        "publishedAt": "2023-12-13T10:12:22Z",
        "content": "Asthma is one of the most common respiratory diseases worldwide.\r\nA new monoclonal antibody treatment, benralizumab, offers hope for the millions living with severe asthma. This targeted therapy coul… [+1464 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "News-Medical.Net"
        },
        "author": null,
        "title": "Immunopeptidomics offer new hope in cancer research - News-Medical.Net",
        "description": "In this new omg OMx podcast episode, Bruker's Kate Stumpo speaks to Nicola Ternette on the incredible world of immunopeptidomics - the implications they could have for research and how they help us\nunderstand the immune system better.",
        "url": "https://www.news-medical.net/news/20231213/Immunopeptidomics-offer-new-hope-in-cancer-research.aspx",
        "urlToImage": "https://d2jx2rerrg6sh3.cloudfront.net/images/news/ImageForNews_753674_16927213179421037.jpg",
        "publishedAt": "2023-12-13T09:12:00Z",
        "content": "In this omg OMx podcast episode, Bruker's Kate Stumpo gets inside the mind of an immunopeptidomics trailblazer, Nicola Ternette, to discuss how her work has helped to shed light on the role of peptid… [+7124 chars]"
      },
      {
        "source": {
          "id": "the-times-of-india",
          "name": "The Times of India"
        },
        "author": "ET HealthWorld",
        "title": "Smoking shrinks brain, genetics play important role, research finds - ETHealthWorld",
        "description": "New research has found that smoking causes the brain to shrink and that genetics could be important as about half of one's risk of smoking can come from their genes. Researchers at Washington University School of Medicine, US, said that since a natural reduct…",
        "url": "https://health.economictimes.indiatimes.com/news/industry/smoking-shrinks-brain-genetics-play-important-role-research-finds/105958802",
        "urlToImage": "https://etimg.etb2bimg.com/thumb/msid-105958802,imgsize-15736,width-1200,height=765,overlay-ethealth/industry/smoking-shrinks-brain-genetics-play-important-role-research-finds.jpg",
        "publishedAt": "2023-12-13T09:04:22Z",
        "content": "New Delhi: New research has found that smoking causes the brain to shrink and that genetics could be important as about half of one's risk of smoking can come from their genes. Researchers at Washing… [+2905 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "India TV News"
        },
        "author": "Written by India TV Lifestyle Desk, Edited by Kristina Das",
        "title": "Dates soaked in Ghee: Know 5 health benefits of this magic mix - India TV News",
        "description": "Dates soaked in ghee are a magical combination that offers numerous health benefits. It is a natural and safe way to boost your immune system, aid digestion, promote heart health, regulate hormones, and provide energy and strength.",
        "url": "https://www.indiatvnews.com/lifestyle/food/dates-soaked-in-ghee-know-5-health-benefits-of-this-magic-mix-2023-12-13-907132",
        "urlToImage": "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2023/12/dates-soaked-in-ghee-1702455910.jpg",
        "publishedAt": "2023-12-13T09:02:20Z",
        "content": "Dates and ghee, two ingredients that have been a staple in many cultures for centuries, have now come together to create a magic mix that is taking the health world by storm. Dates soaked in ghee, al… [+3866 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Financial Express"
        },
        "author": "The Financial Express",
        "title": "China’s ‘walking’ pneumonia outbreak exposes stark global threat of superbugs, drug resistance - The Financial Express",
        "description": null,
        "url": "https://www.financialexpress.com/healthcare/news-healthcare/chinas-walking-pneumonia-outbreak-exposes-stark-global-threat-of-superbugs-drug-resistance-bkg/3337521/",
        "urlToImage": null,
        "publishedAt": "2023-12-13T08:45:42Z",
        "content": null
      },
      {
        "source": {
          "id": null,
          "name": "Moneycontrol"
        },
        "author": "Sushmita Srivastav",
        "title": "Add okra, eggplant, olive oil and others in your daily diet to manage cholesterol levels naturally - Moneycontrol",
        "description": "How to manage cholesterol levels naturally: Incorporating certain food items into a well-rounded, heart-healthy diet can help you manage your cholesterol and contribute to overall cardiovascular wellness.",
        "url": "https://www.moneycontrol.com/news/health-and-fitness/add-okra-eggplant-olive-oil-and-others-in-your-daily-diet-to-manage-cholesterol-levels-naturally-11898501.html",
        "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/11/Health-benefits-of-oats-770x433.jpg",
        "publishedAt": "2023-12-13T08:36:26Z",
        "content": "Maintaining healthy cholesterol levels is pivotal for a robust cardiovascular system. While medication can be beneficial, a balanced diet along with a healthy, active lifestyle plays a significant ro… [+3845 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Financial Express"
        },
        "author": "The Financial Express",
        "title": "Covid variant alert! US reports 3 new strain of coronavirus – All you need to know about HV.1, EG.5, BA.2.86 variants - The Financial Express",
        "description": null,
        "url": "https://www.financialexpress.com/healthcare/covid-19/covid-variant-alert-december-2023-full-list-place-of-origin-details-on-hv-1-eg5-ba286-and-jn1-coronavirus-strain-bkg/3337469/",
        "urlToImage": null,
        "publishedAt": "2023-12-13T08:33:33Z",
        "content": null
      },
      {
        "source": {
          "id": null,
          "name": "AuntMinnie"
        },
        "author": "Will Morton",
        "title": "PET/CT shows impact of different COVID-19 vaccines - AuntMinnie",
        "description": "The type of COVID-19 vaccine and the time interval between vaccination and PET/CT scans are key factors in minimizing false interpretations in cancer patients.",
        "url": "https://www.auntminnie.com/clinical-news/molecular-imaging/article/15660120/petct-shows-impact-of-different-covid19-vaccines",
        "urlToImage": "https://img.auntminnie.com/files/base/smg/all/image/2023/12/PET_vaccine_uptake.6578b56535c82.png?auto=format%2Ccompress&fit=max&q=70&w=1200",
        "publishedAt": "2023-12-13T08:23:20Z",
        "content": "The type of COVID-19 vaccine and the time interval between vaccination and PET/CT scans are key factors in minimizing false interpretations in cancer patients, according to research published Decembe… [+4160 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Moneycontrol"
        },
        "author": "Sushmita Srivastav",
        "title": "Health benefits of a 30-minute morning walk on an empty stomach - Moneycontrol",
        "description": "The health benefits of a 30-minute morning walk on an empty stomach are undeniable. From aiding weight management to fostering mental well-being and improving overall health, this simple practice holds immense potential.",
        "url": "https://www.moneycontrol.com/news/health-and-fitness/health-benefits-of-a-30-minute-morning-walk-on-an-empty-stomach-11898231.html",
        "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/05/Health-benefits-of-walking-770x433.jpg",
        "publishedAt": "2023-12-13T08:13:19Z",
        "content": "The quietude of dawn, the birdsong, the crisp in the air, the stillness of the world waking up to a new day theres a serene magic to an early morning stroll. And when done on an empty stomach, a shor… [+2848 chars]"
      }
    ]
  });
    useEffect(()=>{
      fetchBlogs().then((data) => {
        if(data!=undefined || data !=null)
        setBlogs(data);
      
    })
      .catch((err) => console.log(err));
    },[]);
  return (
    <section className="home" id="home">
      <div className="content">
        <h3>stay safe, stay healthy, stay vaccinated</h3>
        <h3>Book your Vaccine Now!!</h3>
        <p>
          {" "}
          Vaccination throughout the childhood is very essential as it helps in
          providing immunity before children are exposed to any life-threatening
          diseases.
        </p>
        <p> If not vaccinated on time may face sevire health issues.</p>
        <p>These are some of the articles depriciating the news, related to recent health illnesses. </p>
      </div>
      <div className="blog-list">
        {blogs.articles.map((blog) => (
          <BlogCard
            key={blog.url}
            title={blog.title}
            author={blog.author}
            date={blog.date}
            content={blog.description}
            url={blog.url}
            urlToImage={blog.urlToImage}
          />
        ))}
      </div>
    </section>
  );
}
