---
pageClass: about-page
description: 'The biography and information about me.'
avatar: /profile.jpeg
head: 'Yuhao Zhang'
info: 'Student at New York University'
interests: 'Interests: Distributed System, Software Engineering.'
socials:
- title: github
  link: https://github.com/hazenoeasy
- title: linkedin
  link: https://www.linkedin.com/in/yuhao-zhang-b94145214/
- title: instagram
  link: https://www.instagram.com/yuhao_zhang98/
- title: email
  link: 'mailto:itszyh98@gmail.com'
actions:
- text: Projects
  link: /projects/
# - text: Blog
#   link: https://github.com/mtobeiyf
- text: CV
  link: https://pdfhost.io/v/ZcfctygTB_Scismic_s_Recommended_CV_Template_for_Biotech_and_Pharma_Jobs
footer: Powered by VuePress
---

<AboutCard :frontmatter="$page.frontmatter" >

I was born and raised in Beijing, China. I earned a Bachelor's Degree in Computer Science from Wuhan University. Now I am pursuing the Master's in Computer Science from New York University.  

Actively seeking full time SDE job for 2023! :dizzy:

</AboutCard>

<style lang="stylus">

.theme-container.about-page .page
  background-color #e6ecf0
  min-height calc(100vh)
  
  .last-updated
    display none

</style>
