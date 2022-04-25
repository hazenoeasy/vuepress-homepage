---
pageClass: home-page
# some data for the components

name: Yuhao Zhang
profile: /profile.jpeg

socials:
  - title: github
    icon: "/icons/github.svg"
    link: https://github.com/hazenoeasy
  - title: linkedin
    icon: "/icons/linkedin-mono.svg"
    link: https://www.linkedin.com/in/yuhao-zhang-b94145214/
  - title: instagram
    icon: "/icons/instagram-mono.svg"
    link: https://www.instagram.com/yuhao_zhang98/

cv: https://pdfhost.io/v/ZcfctygTB_Scismic_s_Recommended_CV_Template_for_Biotech_and_Pharma_Jobs
bio: Student at New York University
email: itszyh98@gmail.edu
---

<ProfileSection :frontmatter="$page.frontmatter" />

## About Me

I was born in China. I earned a Bachelor's Degree in Wuhan University. Now I am pursuing Master's Degree in New York University

<!-- ## News

- [Sept 1991] Attended Hogwarts
- [July 1980] Born in Godric's Hollow, West Country, England, Great Britain -->

## Education & Experiences

- **Hogwarts School of Witchcraft and Wizardry** <br/>
Sept 1991 - 1997

## Projects

[→ Full list](/projects/)

<ProjectCard image="/projects/1.png" hideBorder=true>

  **The Making of Harry Potter's Wand**

  Harry P., Hermione G., *et al*
  
  Harry's wand was broken in 1997, but was repaired by him after the 1998 Battle of Hogwarts. Usually the repair of a wand is impossible, but with the use of the Elder Wand it was achievable.
  
  [[PDF](https://www.google.com)] [[arXiv](https://arxiv.org)]

</ProjectCard>

<ProjectCard hideBorder=true>

  **Harry Potter and the Deathly Hallows**
  
  In the epilogue of Deathly Hallows, which is set 19 years after Voldemort's death, Harry and Ginny are a couple and have three children: James Sirius Potter, who has already been at Hogwarts for at least one year, Albus Severus Potter, who is starting his first year there, and Lily Luna Potter, who is two years away from her first year at the school.

  [[Link](https://www.google.com)]

</ProjectCard>

## Awards & Honors

### Contests

- First place in **The Hogwarts House Cup**

<!-- Custom style for this page -->

<style lang="stylus">

.theme-container.home-page .page
  font-size 14px
  font-family "lucida grande", "lucida sans unicode", lucida, "Helvetica Neue", Helvetica, Arial, sans-serif;
  p
    margin 0 0 0.5rem
  p, ul, ol
    line-height normal
  a
    font-weight normal
  .theme-default-content:not(.custom) > h2
    margin-bottom 0.5rem
  .theme-default-content:not(.custom) > h2:first-child + p
    margin-top 0.5rem
  .theme-default-content:not(.custom) > h3
    padding-top 4rem

  /*Override*/
  .md-card
    margin-top 0.5em
    .card-image
      padding 0.2rem
      img
        max-width 120px
        max-height 120px
    .card-content p
      -webkit-margin-after 0.2em

@media (max-width: 419px)
  .theme-container.home-page .page
    p, ul, ol
      line-height 1.5

    .md-card
      .card-image
        img
          width 100%
          max-width 400px

</style>
