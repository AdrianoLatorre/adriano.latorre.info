---
layout: default
nav: Profile
permalink: /profile/
---

<article class="home-index"><br><br>
  <img src="/-/profile/profile.png"/>
  <div class="grid gutter">
    <div class="grid-33 h-i"></div>
    <div class="grid-66 h-i">
      <header class="header-index">
        <h2>UX, copywriter and web designer in love with new media and deeply interested in communication, design and technology.</h2>
      </header>
    </div>
    <div class="grid-33">
      <h1>Experience</h1>
    </div>
    <div class="grid-66">
      <section class="work-index">
        {% assign work_by_date = site.work | sort: 'date' %}
        {% assign last_work = work_by_date | last %}
        {% assign work_offset = 1 %}
        <p><br></p>
        <dl class="profile-experience">
          <div class="grid gutter">
            <div class="grid-33 h-i">
              <dt>2014 – Today</dt>
            </div>
            <div class="grid-66 h-i">
              <dd>Spines —Build deep, enduring knowledge</dd>
              <dd>UX, copywriting, graphic design and web design.</dd>
            </div>
            <div class="grid-33 h-i">
              <dt>2009 – 2014</dt>
            </div>
            <div class="grid-66 h-i">
              <dd>Arista Barcelona <span class="nazgul">—Mordor Pedralbes</span></dd>
              <dd>Web architecture, copywriting and web design.</dd>
            </div>
            <div class="grid-33 h-i">
              <dt>2007 – 2009</dt>
            </div>
            <div class="grid-66 h-i">
              <dd>Freelance —independent web consulting work</dd>
              <dd>Web architecture, copywriting and web design.</dd>
            </div>
            <div class="grid-33 h-i">
              <dt>2000 – 2007</dt>
            </div>
            <div class="grid-66 h-i">
              <dd>httpcomunicació —una agència de comunicació</dd>
              <dd>Web architecture, copywriting, web design and video editing.</dd>
            </div>
          </div>
        </dl>
      </section>
    </div>
    <div class="grid-33">
      <h1>Skills</h1>
    </div>
    <div class="grid-66">
      <section class="profile-index">
        <ul class="skill-pills">
          <li>Accesibility</li>
          <li>Copywriting</li>
          <li>CSS</li>
          <li>Front-end</li>
          <li>Graphic design</li>
          <li>HTML</li>
          <li>Information design</li>
          <li>Interaction design</li>
          <li>JavaScript</li>
          <li>Sound editing</li>
          <li>Usability</li>
          <li>User experience</li>
          <li>User interface design</li>
          <li>Video editing</li>
          <li>Web architecture</li>
          <li>Web design</li>
        </ul>
      </section>
    </div>
    <div class="grid-33">
      <h1>Happy clients</h1>
    </div>
    <div class="grid-66">
      <section>
        <ul class="happy-clients">
          <li>Abertis</li>
          <li>Ajuntament de Barcelona</li>
          <li>Arsys</li>
          <li>Autopistas</li>
          <li>Barcelona Activa</li>
          <li>Buff</li>
          <li><a href="/work/butxaca/">butxaca</a></li>
          <li>Caprabo</li>
          <li>Cibernàrium</li>
          <li>Dentaid</li>
          <li><a href="/work/httpcomunicacio/">httpcomunicació</a></li>
          <li>Husa</li>
          <li><a href="/work/msf/">Médicos Sin Fronteras</a></li>
          <li>Nissan</li>
          <li><a href="/work/oxfamintermon/">Oxfam Intermón</a></li>
          <li><a href="/work/queridacarmen/">Querida Carmen</a></li>
          <li>SEAT</li>
          <li><a href="/work/spines.me/">Spines</a></li>
        </ul>
      </section>
    </div>
    <div class="grid-33">
      <h1>Contact</h1>
    </div>
    <div class="grid-66">
      <section>
        <ul>
          <li>Find me on <a href="{{ site.alt.twitter }}">Twitter</a>, <a href="{{ site.alt.refind }}">Refind</a> and <a href="{{ site.alt.linkedin }}">LinkedIn</a>.</li>
</ul>
</section>
</div>
</div>
</article>
