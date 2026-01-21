import shabdsuno from "public/images/shabdsuno.png";
import rajyatra from "public/images/rajyatra.png";
import dreamnest from "public/images/dreamnest.png";


export const products = [
  {
    href: "https://dreamnest-real-state.netlify.app/",
    title: "DreamNest",
    description:
      "A high-performance real estate website built to showcase properties and capture qualified leads without relying on a heavy backend.",
    thumbnail: dreamnest,
    images: [dreamnest, dreamnest],
    stack: ["Next.js", "Tailwind CSS"],
    slug: "dreamnestresidences",
    content: (
      <div className="space-y-4">
        <p>
          DreamNest Developers approached us with a clear goal — they needed a
          fast, reliable website to showcase their real estate projects and
          generate genuine leads. The main challenge was delivering a smooth,
          modern browsing experience without compromising performance by using a
          heavy CMS or complex backend setup.
        </p>

        <p>
          We designed and developed a clean, user-focused real estate platform
          using Next.js and Tailwind CSS. The interface is lightweight, responsive,
          and optimized for speed, allowing visitors to explore properties
          effortlessly across all devices.
        </p>

        <p>
          Instead of relying on a traditional backend, we implemented smart
          client-side lead capture forms that securely deliver inquiries directly
          to the sales team. This approach significantly reduced infrastructure
          costs, improved page load times, and ensured a seamless, distraction-free
          experience for potential buyers.
        </p>

        <p>
          The result is a fast-loading, scalable real estate website that helps
          DreamNest present their projects professionally while converting visitors
          into quality leads.
        </p>
      </div>
    ),
  }
  ,
  {
    href: "https://rajyatra.netlify.app/",
    title: "RajYatra",
    description:
      "A travel-focused website built to showcase curated Indian tour packages with clear itineraries, transparent pricing, and easy inquiry flow.",
    thumbnail: rajyatra,
    images: [rajyatra, rajyatra],
    stack: ["Next.js", "Tailwind CSS"],
    slug: "rajyatra",
    content: (
      <div className="space-y-4">
        <p>
          RajYatra is a tour-operating brand focused on curated travel experiences
          across India, with a strong emphasis on Rajasthan. The team wanted to
          transform their on-ground destination knowledge into a digital platform
          that feels inspiring, informative, and easy to use for both Indian and
          international travelers.
        </p>

        <p>
          The primary challenge was to present multiple tour packages in a clear
          and structured way while keeping the experience visually engaging. Each
          tour needed transparent pricing, well-defined itineraries, and enough
          detail to help travelers confidently plan their journey.
        </p>

        <p>
          We designed and developed a modern travel portal using Next.js and
          Tailwind CSS, focusing on performance, clarity, and smooth navigation.
          Users can easily browse tours across India, explore Rajasthan’s cultural
          destinations, and understand each package through day-wise itineraries
          and inclusions.
        </p>

        <p>
          Integrated inquiry forms and guide contact options make the booking
          process simple and personal. The final result is a content-driven,
          fast-loading travel website that works both as a digital brochure and a
          practical booking gateway for RajYatra.
        </p>
      </div>
    ),
  }
  ,
  {
    href: "https://shabdsubo.vercel.app/",
    title: "ShabdSuno",
    description:
      "A digital reading platform that brings e-commerce, e-reading, and audiobooks together into a single, seamless experience.",
    thumbnail: shabdsuno,
    images: [shabdsuno, shabdsuno],
    stack: ["Next.js", "Tailwind CSS"],
    slug: "shabdsuno",
    content: (
      <div className="space-y-4">
        <p>
          ShabdSuno was envisioned by Pankaj Saini as a modern digital platform that
          rethinks the traditional online bookstore experience. The goal was to
          create one intuitive space where readers could discover, purchase, read,
          listen to, and annotate books without jumping between multiple tools or
          platforms.
        </p>

        <p>
          The main challenge was bringing together e-commerce, an in-browser
          e-reader, an audio player, and a user management system into a single
          high-performance application while keeping the experience smooth and
          distraction-free for readers.
        </p>

        <p>
          We developed ShabdSuno as a full-featured digital library and reading
          platform with a modular architecture. Users can securely purchase books,
          read them directly in the browser, highlight and annotate content, or
          switch seamlessly to audiobooks. Each feature is designed to feel
          connected yet independent, ensuring flexibility and scalability.
        </p>

        <p>
          Behind the scenes, a robust system manages user accounts, personal
          libraries, and content delivery to ensure reliability and security. The
          final product is a rich, interactive platform that creates a deeper and
          more engaging connection between readers and literature.
        </p>
      </div>
    ),
  }

];
