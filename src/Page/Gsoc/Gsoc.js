import React, { useEffect } from "react";
import "./Gsoc.css";
import gsocTor from "../../assets/gsoc.png";
import gsocDesktop from "../../assets/video/Snowflake-demo.mp4";
import gsocMob from "../../assets/video/Snowflake_mobile.mp4";
import { motion } from "framer-motion";

function Gsoc() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <motion.div
        className="outline-gsoc"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
      >
        <div className="gsoc-heading">
          Google Summer of Code 2023 - Tor's SnowFlake: Revitalising Snowflake's
          Landing Page for a Better User Experience
        </div>
        <div className="gsoc-img">
          <img src={gsocTor} alt="" />
        </div>

        <hr className="hr-break" />

        <div className="gsoc-intro-heads">
          <div className="mid-gsoc-head">
            <span className="head-heading-gsoc">Contributor: </span>
            <span className="head-sub-head-link-gsoc">
              <a target="_blank" href=".">
                Ashish Soni
              </a>
            </span>
          </div>
        </div>
        <div className="gsoc-intro-heads">
          <div className="mid-gsoc-head">
            <span className="head-heading-gsoc">Mentor: </span>
            <span className="head-sub-head-link-gsoc">
              <a target="__blank" href="https://github.com/rayasharbain">
                Raya
              </a>
              <span>, </span>
              <a target="__blank" href="https://gitlab.torproject.org/donuts">
                Donuts
              </a>
            </span>
          </div>
        </div>
        <div className="gsoc-intro-heads">
          <div className="mid-gsoc-head">
            <span className="head-heading-gsoc">Organization: </span>
            <span className="head-sub-head-link-gsoc">
              <a target="__blank" href="https://www.torproject.org/">
                The Tor Project
              </a>
            </span>
          </div>
        </div>
        <div className="gsoc-intro-heads">
          <div className="mid-gsoc-head">
            <span className="head-heading-gsoc">Repository: </span>
            <span className="head-sub-head-link-gsoc">
              <a
                target="__blank"
                href="https://gitlab.torproject.org/tpo/web/snowflake"
              >
                Snowflake
              </a>
            </span>
          </div>
        </div>

        {/* Project Descripption */}

        <div className="Project-sections">
          <div className="section--gsoc-heading">Project Description</div>

          <div className="section-sub-text-gsoc">
            The primary goal of this project was to revamp Tor's Snowflake
            landing page, providing a better user experience for both desktop
            and mobile users. This involved creating a modern and intuitive
            website that aligns with Tor's brand guidelines and integrates
            seamlessly with other Tor web products. I started working on this
            project from scratch, and the repository for this new project can be
            found at -
            <a
              className="link-gsoc-color"
              href="https://gitlab.torproject.org/tpo/web/snowflake"
            >
              tor/web/snowflake.
            </a>
            <br />
            The project started with creating wireframes, followed by the
            development of a Figma design by the UX Team. I then transformed
            this design into code using HTML, CSS, Bootstrap. The resulting code
            displayed the new responsive Snowflake website. The website can be
            viewed at <span> </span>
            <a
              className="link-gsoc-color"
              href="https://snowflake.staging.torproject.org"
            >
              snowflake.staging.torproject.org
            </a>
            <span> </span>
            and its username is <i> tor-www </i> (please leave the password
            blank). It has been integrated with Lektor, ensuring a robust and
            responsive user experience.
          </div>
        </div>

        {/*  */}
        {/* whats donw  */}

        <div className="Project-sections">
          <div className="section--gsoc-heading">What's Done</div>

          <div className="section-sub-text-gsoc">
            <ul>
              <li>
                <a
                  className="color-link"
                  href="https://www.figma.com/file/w1Q4nFFe7gdmW8SRRr9toZ/Snowflake-2.0?type=whiteboard&node-id=0%3A1&t=igqcj5wLuCStNEJ5-1"
                >
                  WireFrames
                </a>
              </li>
              <li>
                Design obtained from the UI/UX team -{" "}
                <a
                  className="color-link"
                  href="https://www.figma.com/file/3oBOW0roWJCABzOJtQ4RYf/Snowflake?node-id=0%3A1&mode=dev"
                >
                  Link to Final Figma Design
                </a>
              </li>
              <li>
                Conversion of design into code for a new landing page using
                HTML, CSS, Bootstrap 5.3.0, integrated with Lektor -{" "}
                <a
                  className="color-link"
                  href="https://tor-www@snowflake.staging.torproject.net/"
                >
                  View Website
                </a>
              </li>
              <li>Code Sections:</li>
              <ul>
                <li>
                  <details>
                    <summary className="color-summary">get-snowflake</summary>
                    <img
                      width="742"
                      alt="getSnowflake"
                      src="https://user-images.githubusercontent.com/91901271/266545730-163454ec-b44a-4698-9745-72f8be7bbb6a.png"
                    />
                  </details>
                </li>
                <li>
                  <details>
                    <summary className="color-summary">use-snowflake</summary>
                    <img
                      width="704"
                      alt="use-snowflake"
                      src="https://user-images.githubusercontent.com/91901271/266546141-46d00603-19f3-4c3b-abc6-f45648db2f78.png"
                    />
                  </details>
                </li>
                <li>
                  <details>
                    <summary className="color-summary">
                      donate-bandwidth
                    </summary>
                    <img
                      width="478"
                      alt="Donate-bw"
                      src="https://user-images.githubusercontent.com/91901271/266546505-25435ff1-5d6a-4851-bca6-40deb274989c.png"
                    />
                  </details>
                </li>
                <li>
                  <details>
                    <summary className="color-summary">FAQs</summary>
                    <img
                      width="800"
                      alt="FAQs"
                      src="https://user-images.githubusercontent.com/91901271/266546710-b89ebb2c-d568-4243-a9cf-55a46bf15d7a.png"
                    />
                  </details>
                </li>
              </ul>
              <li>Code added for Multilingual support</li>
              <li>Website integrated with Lektor</li>
              <li>Made the website responsive for all devices</li>
              <li>
                Integrated Website with Lektor-i18n plugin (used for
                localization/initialization)
              </li>
            </ul>
          </div>
        </div>

        <div className="Project-sections">
          <div className="section--gsoc-heading">Current state</div>
          <p>
            In the current project phase, we've achieved significant milestones,
            including wireframes, design integration, and coding of a new
            landing page integrated with Lektor. The website can be viewed at{" "}
            <a
              className="color-link"
              href="https://snowflake.staging.torproject.org"
            >
              snowflake.staging.torproject.org
            </a>{" "}
            using the username{" "}
            <span className="color-password"> "tor-www" </span>(Leave password
            blank).
          </p>
        </div>

        <div className="Project-sections">
          <div className="section--gsoc-heading-2">Desktop View</div>

          <div className="gsoc-desktop-vdo">
            <video width="420" controls autoplay muted loop>
              <source src={gsocDesktop} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="Project-sections">
          <div className="section--gsoc-heading-2">Mobile View</div>

          <div className="gsoc-desktop-vdo-mobile">
            <video controls autoplay muted loop>
              <source src={gsocMob} type="video/mp4" />
            </video>
          </div>
        </div>

        {/* extra */}

        <div>
          <h1>What code got merged</h1>
          <ul>
            <li>
              <a
                className="color-link"
                href="https://gitlab.torproject.org/tpo/web/snowflake/-/commits/main"
              >
                All Commits to Main Branch
              </a>
            </li>
            <li>
              <a
                className="color-link"
                href="https://gitlab.torproject.org/tpo/web/snowflake/-/merge_requests?scope=all&state=all"
              >
                Merge Requests
              </a>
            </li>
          </ul>

          <h1>Ongoing Issue / Merge Requests</h1>
          <ul>
            <li>
              <a
                className="color-link"
                href="https://gitlab.torproject.org/tpo/web/snowflake/-/issues/4"
              >
                Snowflake WebExtension Embed - Design / theme Customization and
                Code Migration
              </a>
            </li>
            <li>
              <a
                className="color-link"
                href="https://gitlab.torproject.org/tpo/web/snowflake/-/issues/8"
              >
                Preparing Content for Snowflake Website
              </a>
            </li>
          </ul>

          <h1>Challenges and Learning</h1>
          <p className="text-justify">
            During this project, I faced challenges with legacy technology like
            Lektor CMS. Open-source collaboration taught me communication
            skills. I learned problem-solving, CMS expertise, and the importance
            of continuous learning, enhancing my overall skills.
          </p>

          <p className="color-password">
            I want to sincerely thank my mentor for support and guidance
            throughout this entire journey, as well as to The Tor Project for
            providing me with this remarkable GSoC experience. Thank you!
          </p>
        </div>

        <div className="Project-sections"
        >
          <div className="section--gsoc-heading">💬 Connect With Me</div>

          <div align="center">
            <table>
              <tbody>
                <tr>
                  <td>
                    <strong>Name</strong>
                  </td>
                  <td>Ashish Soni</td>
                </tr>
                <tr>
                  <td>
                    <strong>Organization</strong>
                  </td>
                  <td>
                    <a href="https://www.torproject.org/">The Tor Project</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Project</strong>
                  </td>
                  <td>
                    <a href="https://summerofcode.withgoogle.com/programs/2023/projects/zQRvTgia">
                      Google Summer of Code Project
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>GitHub</strong>
                  </td>
                  <td>
                    <a href="https://github.com/ashishsoniii">@ashishsoniii</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>LinkedIn</strong>
                  </td>
                  <td>
                    <a href="https://www.linkedin.com/in/ashishsoniii/">
                      ashishsoniii
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Email</strong>
                  </td>
                  <td>
                    <a href="mailto:ashishsoni2002@gmail.com">
                      ashishsoni2002@gmail.com
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Portfolio</strong>
                  </td>
                  <td>
                    <a href="https://ashishsoni.studio/">ashish.studio</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Project Github Repository</strong>
                  </td>
                  <td>
                    <a href="https://gitlab.torproject.org/tpo/web/snowflake">
                      Snowflake
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Gsoc;
