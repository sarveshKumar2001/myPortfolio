/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title:
      "ANALYZING PUBLIC PERCEPTION AND USER SENTIMENTS ON TWEETS : A MACHINE LEARNING APPROACH",
    authors:
      "Sarvesh Kumar, Khushi Sarkar, Samyak Dahat, Ayush Singh Shaurya Verma, Sakshi Kumari",
    conferences:
      "INTERNATIONAL JOURNAL OF SCIENTIFIC RESEARCH IN ENGINEERING & MANAGEMENT (IJSREM)",
    researchYr: 2024,
    citebox: "popup1",
    image: "assets/images/research-page/R1.png",
    citation: {
      vancouver:
        "Sarvesh Kumar, Khushi Sarkar, Samyak Dahat, Ayush Singh Shaurya Verma, Sakshi Kumari - Sentiment Analysis. INTERNATIONAL JOURNAL OF SCIENTIFIC RESEARCH IN ENGINEERING & MANAGEMENT (IJSREM)2024 ",
    },
    abstract:
      "Social media platforms like Twitter have revolutionized how we measure public opinion in real time. Sentiment analysis, part of natural language processing (NLP), helps extract and categorize public sentiments from this data. The study focuses on sentiment analysis techniques specifically for Twitter, considering its unique features like brevity, casual language, slang, emoticons, and hashtags. Various supervised machine learning methods for sentiment categorization (positive, negative, neutral) on Twitter are investigated using Python and NLTK. The goal is to enhance sentiment analysis in the context of political debates, understanding public attitudes and opinions. The results aim to advance knowledge in sentiment analysis on social media, benefiting researchers and practitioners in comprehending public opinion more effectively. The project also provides insights into how social media shapes and reflects public perceptions of politicians and parties, contributing to political opinion mining.",
    absbox: "absPopup1",
  },

];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
