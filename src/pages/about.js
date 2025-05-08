import React from "react";

const AboutPage = () => (
  <main className="prose prose-lg px-6 py-10 mx-auto max-w-4xl">
    <h1>About Warewulf</h1>
    <p>
      Warewulf is a powerful, scalable, and flexible stateless provisioning system designed to simplify the deployment and management of High Performance Computing (HPC) clusters. Built for performance, maintainability, and automation, Warewulf enables system administrators and researchers to deploy clusters rapidly using proven, open standards.
    </p>
    <p>
      Originally developed to meet the unique needs of the HPC community, Warewulf has evolved into a mature, community-driven project trusted in academic, government, and commercial environments. With its network-boot model and stateless node management, Warewulf delivers efficiency and control to environments where performance, repeatability, and ease of administration are critical.
    </p>

    <h2>Our History</h2>
    <p>
      Warewulf was first released in the early 2000s as a project within the Open Source HPC ecosystem. Its creator, Greg Kurtzer, developed Warewulf as a lightweight alternative to traditional cluster management systems, focusing on the specific provisioning needs of HPC environments. It gained early adoption at national laboratories and universities for its simplicity, scalability, and integration with existing Linux tools.
    </p>
    <p>
      As the complexity of cluster deployments grew, so did Warewulf. Over the years, it has evolved to support container-based provisioning, secure boot methods, and integration with modern infrastructure components. Warewulf 4, the most recent major version, represents a significant architectural leap forward — rebuilt from the ground up with Go, YAML-based configurations, and a simplified, modular design.
    </p>

    <h2>Project Vision and Goals</h2>
    <p>
      At its core, Warewulf exists to make HPC provisioning easier, faster, and more maintainable without sacrificing flexibility or control. Our vision is to empower organizations of all sizes — from research labs and universities to enterprises and hyperscalers — with the tools to manage their clusters reliably and repeatably.
    </p>
    <ul>
      <li><strong>Stateless Simplicity –</strong> Remove unnecessary complexity by managing node images and configurations centrally, enabling true stateless booting and provisioning.</li>
      <li><strong>Performance at Scale –</strong> Ensure that cluster deployment and management is fast, lightweight, and scalable across thousands of nodes.</li>
      <li><strong>Community Collaboration –</strong> Grow a vibrant open source community where contributions are welcomed, use cases are shared, and innovation thrives.</li>
      <li><strong>Security and Compliance –</strong> Evolve Warewulf to support hardened operating system images, secure boot environments, and modern compliance needs.</li>
      <li><strong>Integration and Extensibility –</strong> Play well with other tools and ecosystems — including Ansible, container runtimes, Slurm, and beyond.</li>
    </ul>

    <h2>Growth and Adoption</h2>
    <p>
      Warewulf continues to see adoption across a wide range of sectors, including:
    </p>
    <ul>
      <li><strong>Academic Research –</strong> Supporting data-intensive research through efficient cluster management.</li>
      <li><strong>Government and National Labs –</strong> Providing scalable, secure provisioning in mission-critical environments.</li>
      <li><strong>Commercial HPC –</strong> Delivering reproducible cluster deployments in biotech, finance, manufacturing, and AI/ML workloads.</li>
    </ul>
    <p>
      Commercial support for Warewulf is available through <a href="https://ciq.com" target="_blank" rel="noopener noreferrer">CIQ</a> and <a href="https://suse.com" target="_blank" rel="noopener noreferrer">SUSE</a>, ensuring organizations can rely on trusted partners for enterprise-grade assistance, consulting, and lifecycle support.
    </p>
    <p>
      The project is actively maintained by a growing group of contributors and collaborators. Community feedback, feature requests, and bug reports directly shape Warewulf’s development. Whether you’re deploying your first cluster or managing thousands of compute nodes, Warewulf is here to simplify your journey.
    </p>

    <h2>Governance</h2>
    <p>
      Warewulf is an open-source, community-driven project committed to transparent and collaborative development. Oversight of the project’s technical direction is provided by our <strong>Technical Steering Committee (TSC)</strong>.
    </p>
    <h3>Technical Steering Committee (TSC)</h3>
    <p>The TSC meets regularly to discuss project roadmap updates, major feature planning, community feedback, and community contributions. These meetings are open to the public, and everyone is welcome to attend, observe, or participate.</p>
    <ul>
      <li><strong>Purpose:</strong> Guide the technical vision and ensure the long-term sustainability of Warewulf.</li>
      <li><strong>Participation:</strong> Community members are encouraged to join meetings, suggest agenda items, and contribute to discussions.</li>
      <li><strong>Schedule:</strong> Meetings are held on the <strong>1st and 3rd Wednesday of each month at 12:30 PM Pacific Time</strong>.</li>
      <li><strong>Access:</strong> Meeting details are shared inside the Warewulf community Slack Channel.</li>
    </ul>
    <h3>Meeting Recordings</h3>
    <p>All TSC meetings are recorded and published to our YouTube channel to promote openness and accessibility.</p>
    <p>👉 <a href="https://www.youtube.com/@warewulfhpc" target="_blank" rel="noopener noreferrer">Watch TSC Meetings on YouTube</a></p>

    <h2>Get Involved</h2>
    <p>Warewulf thrives because of its community. We invite you to join us!</p>
    <h3>Community Project</h3>
    <ul>
      <li><a href="https://warewulf.slack.com" target="_blank" rel="noopener noreferrer">Join our community discussions on Slack</a></li>
      <li><a href="https://github.com/warewulf/warewulf" target="_blank" rel="noopener noreferrer">Contribute on GitHub</a></li>
    </ul>
    <h3>Social Media</h3>
    <ul>
      <li><a href="https://x.com/warewulf" target="_blank" rel="noopener noreferrer">Follow us on X</a></li>
      <li><a href="https://bsky.app/profile/warewulf.bsky.social" target="_blank" rel="noopener noreferrer">Follow us on BlueSky</a></li>
      <li><a href="https://www.youtube.com/@warewulfhpc" target="_blank" rel="noopener noreferrer">Follow us on YouTube</a></li>
    </ul>
    <h3>Commercial Support</h3>
    <ul>
      <li><a href="https://ciq.com" target="_blank" rel="noopener noreferrer">CIQ</a></li>
      <li><a href="https://suse.com" target="_blank" rel="noopener noreferrer">SUSE</a></li>
    </ul>
    <p>
      Whether you’re a systems engineer, developer, researcher, or passionate about open infrastructure, your voice matters. Together, we can continue building a better future for open source HPC.
    </p>
  </main>
);

export default AboutPage;
