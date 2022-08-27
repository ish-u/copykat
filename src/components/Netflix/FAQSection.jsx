import FAQAccordion from "./FAQAccordion";

const FAQS = [
  {
    Q: "What is Netflix?",
    A: [
      "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.",
      "You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
    ],
  },
  {
    Q: "How much does Netflix cost?",
    A: [
      "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.",
    ],
  },
  {
    Q: "Where can I watch?",
    A: [
      "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
      "You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
    ],
  },
  {
    Q: "How do I cancel?",
    A: [
      "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    ],
  },
  {
    Q: "What can I watch on Netflix?",
    A: [
      "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
    ],
  },
  {
    Q: "Is Netflix good for kids?",
    A: [
      "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.",
      "Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
    ],
  },
];

const FAQSection = () => {
  return (
    <div className="w-full bg-black border-t-8 border-[#222222] flex flex-col">
      <div className="text-5xl font-bold p-16 flex m-auto">
        Frequently Asked Questions
      </div>
      <div className="w-full flex flex-col items-center">
        {FAQS.map((qa, idx) => (
          <FAQAccordion data={qa} key={idx} />
        ))}
      </div>
      <div className="w-full flex flex-col items-center my-12">
        <span className="drop-shadow-md text-lg">
          Ready to watch? Enter your email to create or restart your membership.
        </span>
        <div className="w-full h-16 mt-4 flex justify-center align-middle">
          <input
            className="w-2/6 p-4 h-full rounded-sm border-0 focus:outline-none text-black"
            placeholder="Email Address"
          ></input>
          <button className="w-1/6 bg-[#e50914] h-full rounded-sm border-red text-3xl flex justify-center items-center">
            Get Started
            <span className="material-icons text-4xl">navigate_next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
