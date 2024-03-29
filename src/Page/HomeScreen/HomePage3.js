import React from "react";
import Hp3projectCard1 from "./components/Hp3projectCard1";
import { motion } from "framer-motion";

function HomePage3() {
  const skills = ["React", "HTML", "CSS", "JavaScript", "Web Development"];

  return (
    <>
      <div className="homepage3-heading">Projects</div>
      <motion.section
        // initial={{ opacity: 0, x: 100 }}
        // whileInView={{ opacity: 1, x: 10 }}
        // transition={{ duration:  }} // Transition configuration
        className="homepage3"
      >
        <motion.div className="firstTwo">
          <Hp3projectCard1
            heading="No Limits Fitness Gym Management Website App"
            link="https://sample-nlf.000webhostapp.com/"
            linktext="Try Sample Website"
            backgroundColor="hp3-bg-white"
            content="
            An ultimate all-in-one app for GYM trainers & owners. Simplify gym member management, tracks owner income, and ensure seamless communication with automated email reminders for expired memberships. Streamlining his fitness business with this comprehensive Website!"
            Skills={["HTML", "CSS", "JavaScript", "PHP", "MySQL", "XAMPP"]}
          />
          <Hp3projectCard1
            heading="RasYog: An Aesthetic Analysis WebApp"
            link="https://rasyog.netlify.app/"
            linktext="RasYog"
            backgroundColor="hp3-bg-yellow"
            // content="A data analysis companion website for Jaipur Modern Store. Powered by Yoglabs, Rasyog simplifies data analysis by presenting it in easy-to-understand visual plots. It gives a variety of plots to gain meaningful insights and make informed decisions!"
            content="A Website with user-friendly interface showcasing comprehensive taxonomic and sales data analysis. A frontend for understanding product categories, brands, prices, and sales insights. It gives a variety of plots to gain meaningful insights and make informed decisions!"
            Skills={[
              "React",
              "Plotly.js",
              "Axios",
              "Designed & Coded-Frontend",
            ]}
          />
        </motion.div>
        <motion.div className="firstTwo">
          <Hp3projectCard1
            heading="DineYog: A Food Analysis WebApp"
            link="https://dineyog.netlify.app/"
            linktext="DineYog"
            backgroundColor="hp3-bg-blue"
            content="Developed a comprehensive restaurant data analysis website designed to provide valuable insights into dining trends, including dine-in, takeout, and delivery services. Implemented a suite of interactive graphs and analytics tools to distill complex data sets into actionable information for restaurant owners."
            Skills={skills}
          />
          <Hp3projectCard1
            heading="FlairFest - A College Fest Website"
            link="https://flairfiesta.in/"
            linktext="FlairFiesta.in"
            backgroundColor="hp3-bg-green"
            content="Engaged in a dynamic team effort to craft a compelling and interactive college website, with a specialized role in front-end development. Leveraged cutting-edge technologies including React and various animation libraries to create an engaging user experience that resonates with prospective students and faculty."
            Skills={["React", "Tailwind.css"]}
          />
        </motion.div>
      </motion.section>
    </>
  );
}

export default HomePage3;
