import image1 from './assets/works/image 21.png';
import image2 from './assets/works/image 22.png';
import image3 from './assets/works/image 23.png';
import profile1 from './assets/wts/Frame.png'
import hero1 from './assets/hero-asset-1.png'
import hero2 from './assets/hero-asset-2.png'


const sections = ['Hero', 'Expertise', 'Works', 'Experience', 'Blog', 'What they Say', 'Frequently asked questions'];
const expertiseData = [{
    Heading: "Branding",
    Text: "I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites."
},
{
    Heading: "UI Design",
    Text: "I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites."
},
{
    Heading: "UX Design",
    Text: "I comprehend and resolve digital product issues using a user-focused methodology. Investigation. compassion, and visual conveyance are a few techniques I apply to captivate and involve your users while fulfilling your business requirements"
},
{
    Heading: "Development",
    Text: "I create user-friendly, adaptive, engaging websites. No cookie-cutters. No cumbersome. complex coding. Webflow forms the foundation of my web development approach, I employ it to produce safe, top-notch personalized websites."
}
];
const worksData = [{
    Heading: "Analysis Application",
    Text: "With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.",
    Tags: ["Figma", "ux"],
    Img: image1
},
{
    Heading: "Fortknox Application",
    Text: "With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.",
    Tags: ["Mobile","web"],
    Img: image2
},
{
    Heading: "Zenocide Application",
    Text: "With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.",
    Tags: ["app","web"],
    Img: image3
},
];
const expData = [{
    Company:  "Fortknox",
    Role: "Lead Product Designer",
    Start: "Mar 2022",
    End: "Oct 2023"
},
{
    Company:  "OmniSafe",
    Role: "Intern Designer",
    Start: "Mar 2022",
    End: "Oct 2023"
},
{
    Company:  "Doradesign",
    Role: "UI Designer",
    Start: "Mar 2022",
    End: "Oct 2023"
},
{
    Company:  "OpacityAuthor",
    Role: "Frontend Developer",
    Start: "Mar 2022",
    End: "Oct 2023"
},
]
const blogData = [
  {
    Img: image1,
    Date: "Nov 9, 2023",
    Title: "How UX Works in Web",
    Tags: ["UI", "UX"],
  },
  {
    Img: image2,
    Date: "Aug 18, 2023",
    Title: "Case Study - Analysis Application",
    Tags: ["Design", "Print"],
  },
  {
    Img: image3,
    Date: "Feb 16, 2023",
    Title: "3 Ways to Develop Your Skill",
    Tags: ["Figma", "Web"],
  },
];
const wtsData = [{
    Name: "Floyd Miles",
    Company: "eBay",
    Image: profile1,
    Text: "Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers. Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers."
},
{
    Name: "Second Person",
    Company: "Facebook",
    Image: profile1,
    Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula sem vitae turpis sollicitudin, in vestibulum nunc porttitor. Curabitur et lacus ac risus fermentum pretium. Donec a felis vel sapien ultricies iaculis."
},

];
const faqData = [{
    Question: "What is your design process?",
    Answer: "My design process typically involves four key phases: research, design, prototype, and test. In the research phase, I gather insights about the user and their needs. In the design phase, I create wireframes and visual designs that meet those needs. In the prototype phase, I create interactive models of the design for testing. In the test phase, I collect feedback from users to refine the design."
},
{
    Question: "What tools and software do you use for UX design?",
    Answer: "My design process typically involves four key phases: research, design, prototype, and test. In the research phase, I gather insights about the user and their needs. In the design phase, I create wireframes and visual designs that meet those needs. In the prototype phase, I create interactive models of the design for testing. In the test phase, I collect feedback from users to refine the design."
},
{
    Question: "How do you measure the success of your UX designs?",
    Answer: "My design process typically involves four key phases: research, design, prototype, and test. In the research phase, I gather insights about the user and their needs. In the design phase, I create wireframes and visual designs that meet those needs. In the prototype phase, I create interactive models of the design for testing. In the test phase, I collect feedback from users to refine the design."
},
];
export {
    sections, expertiseData, worksData, expData, blogData, wtsData, faqData, hero1, hero2
}