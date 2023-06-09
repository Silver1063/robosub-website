import React from "react";
import Layout from "@theme/Layout";
import styles from "./github.modules.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function Github() {
  const { siteConfig } = useDocusaurusContext();

  function get_started() {
    location.assign("./../resources");
  }
  function linuxfunc() {
    location.assign("../other/linux");
  }

  function arduino() {
    location.assign("../other/arduino");
  }

  function github() {
    location.assign("../other/github");
  }

  function ros() {
    location.assign("../other/ros");
  }

  function teamsFunc() {
    document.getElementById("dropdown").classList.toggle(styles.show);
  }

  return (
    <Layout>
      {/* Side Nav Bar */}
      <div className={styles.pageWrapper}>
        <nav className={styles.navbar}>
          <ul className={styles.navbar_elements}>
            <button onClick={get_started} className={styles.btn}>
              GET STARTED
            </button>

            <button onClick={teamsFunc} className={styles.btn}>
              {" "}
              TEAMS{" "}
            </button>

            <div id="dropdown" className={styles.DPContent}>
              <a href="../teams/framehull">Frame and Hull</a>
              <a href="../teams/electronics">Electronics</a>
              <a href="../teams/controls">Controls</a>
              <a href="../teams/autonomy">Autonomy</a>
              <a href="../teams/compvis">Computer Vision</a>
            </div>
            <button onClick={arduino} className={styles.btn}>
              ARDUINO
            </button>

            <button onClick={linuxfunc} className={styles.btn}>
              LINUX
            </button>

            <button onClick={github} className={styles.btn}>
              GIT & GITHUB
            </button>

            <button onClick={ros} className={styles.btn}>
              ROBOT OS
            </button>
          </ul>
        </nav>
        <h1>GIT and GITHUB</h1>
        {/* <Image className="github-logo" src="/images/other/GitHubLogo.png" /> */}
        <p className="resources-section-p">
          At a high level, GitHub is a website and cloud-based service that
          helps developers store and manage their code, as well as track and
          control changes to their code. To understand exactly what GitHub is,
          you need to know two connected principles:
        </p>
        <h3 className="resources-section-h3"> 1. Version Control:</h3>
        <p className="resources-section-p">
          In software engineering, version control is a class of systems
          responsible for managing changes to computer programs, documents,
          large web sites, or other collections of information. Version control
          is a component of software configuration management.
        </p>
        <div>
        <h3 className="resources-section-h3"> 2. Git: </h3>
          Git is software for tracking changes in any set of files, usually used
          for coordinating work among programmers collaboratively developing
          source code during software development. Its goals include speed, data
          integrity, and support for distributed, non-linear workflows.
          </div>
        <h1><u>Set Up</u></h1>
        <h3 className="resources-section-h3"> Installing Git Links:</h3>
        <a className="git-links" href="https://git-scm.com/download/win">
          <i class="fab fa-windows fa-2x"> Windows</i>
        </a>
        <a className="git-links" href="https://git-scm.com/download/linux">
          <i class="fab fa-linux fa-2x"></i> Linux
        </a>
        <a className="git-links" href="https://git-scm.com/download/mac">
          <i class="fab fa-apple fa-2x"> Mac OS</i>
        </a>
        <h3 className="resources-section-h3"> GitHub Link:</h3>
        <a className="git-links" href="https://github.com/">
          <i class="fab fa-github fa-2x"> GitHub </i>
        </a>
        <h1>Git Cheat Sheet:</h1>
        SETUP - Configuring user information used across all local repositories
        <br></br>
        <code className="git-code">
          git config --global user.name “[firstname lastname]”
        </code>
        <p className="git-cheat-p">
          Set a name that is identifiable for credit when review version history
        </p>
        <code className="git-code">
          git config --global user.email “[valid-email]”
        </code>
        <p className="git-cheat-p">
          Set an email address that will be associated with each history marker
        </p>
        <code className="git-code">git config --global color.ui auto</code>
        <p className="git-cheat-p">
          Set automatic command line coloring for Git for easy reviewing
        </p>
        SETUP & INIT Configuring user information used across all local
        repositories
        <code className="git-code">git init</code>
        <p className="git-cheat-p">
          Initialize an existing directory as a Git repository
        </p>
        <code className="git-code">git clone [url]</code>
        <p className="git-cheat-p">
          Retrieve an entire repository from a hosted location via URL
        </p>
        STAGE & SNAPSHOT Working with snapshots and the Git staging area
        <code className="git-code">git add [file] or git add .</code>
        <p className="git-cheat-p">
          Add a file as it looks now to your next commit (stage)
        </p>
        <code className="git-code">git commit -m “[descriptive message]”</code>
        <p className="git-cheat-p">
          Commit your staged content as a new commit snapshot
        </p>
        BRANCH & MERGE Isolating work in branches, changing context, and
        integrating changes
        <code className="git-code">git branch</code>
        <p className="git-cheat-p">
          List your branches. a * will appear next to the currently active
          branch
        </p>
        <code className="git-code">git branch [branch-name]</code>
        <p className="git-cheat-p">Create a new branch at the current commit</p>
        <code className="git-code">git checkout [branch-name]</code>
        <p className="git-cheat-p">
          Switch to another branch and check it out into your working directory
        </p>
        <code className="git-code">git merge [branch]</code>
        <p className="git-cheat-p">
          Merge the specified branch’s history into the current one
        </p>
      </div>
    </Layout>
  );
}
