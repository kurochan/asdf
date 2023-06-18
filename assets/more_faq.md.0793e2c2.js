import{_ as e,o,c as t,V as a}from"./chunks/framework.7ae304b1.js";const m=JSON.parse('{"title":"FAQ","description":"","frontmatter":{},"headers":[],"relativePath":"more/faq.md","filePath":"more/faq.md","lastUpdated":1671778129000}'),n={name:"more/faq.md"},s=a('<h1 id="faq" tabindex="-1">FAQ <a class="header-anchor" href="#faq" aria-label="Permalink to &quot;FAQ&quot;">​</a></h1><p>Here are some common questions regarding <code>asdf</code>.</p><h2 id="wsl1-support" tabindex="-1">WSL1 support? <a class="header-anchor" href="#wsl1-support" aria-label="Permalink to &quot;WSL1 support?&quot;">​</a></h2><p>WSL1 (<a href="https://en.wikipedia.org/wiki/Windows_Subsystem_for_Linux" target="_blank" rel="noreferrer">Windows Subsystem for Linux</a> 1) is not officially supported. Some aspects of <code>asdf</code> may not work properly. We do not intend to add official support for WSL1.</p><h2 id="wsl2-support" tabindex="-1">WSL2 support? <a class="header-anchor" href="#wsl2-support" aria-label="Permalink to &quot;WSL2 support?&quot;">​</a></h2><p>WSL2 (<a href="https://en.wikipedia.org/wiki/Windows_Subsystem_for_Linux#WSL_2" target="_blank" rel="noreferrer">Windows Subsystem for Linux</a> 2) should work using the setup &amp; dependency instructions for you chosen WSL distro.</p><p>Importantly, WSL2 is <em>only</em> expected to work properly when the current working directory is a Unix drive and not a bound Windows drive.</p><p>We intend to run out test suite on WSL2 when host runner support is available on GitHub Actions, currently this does not appear to be the case.</p><h2 id="newly-installed-executable-not-running" tabindex="-1">Newly installed executable not running? <a class="header-anchor" href="#newly-installed-executable-not-running" aria-label="Permalink to &quot;Newly installed executable not running?&quot;">​</a></h2><blockquote><p>I just <code>npm install -g yarn</code>, but cannot execute <code>yarn</code>. What gives?</p></blockquote><p><code>asdf</code> uses <a href="https://en.wikipedia.org/wiki/Shim_(computing)" target="_blank" rel="noreferrer">shims</a> to manage executables. Those installed by plugins have shims automatically created, whereas installing executables via an <code>asdf</code> managed tool will require you to notify <code>asdf</code> of the need to create shims. In this instance, to create a shim for <a href="https://yarnpkg.com/" target="_blank" rel="noreferrer">Yarn</a>. See the <a href="/manage/core.html#reshim"><code>asdf reshim</code> command docs</a>.</p><h2 id="shell-not-detecting-newly-installed-shims" tabindex="-1">Shell not detecting newly installed shims? <a class="header-anchor" href="#shell-not-detecting-newly-installed-shims" aria-label="Permalink to &quot;Shell not detecting newly installed shims?&quot;">​</a></h2><p>If <code>asdf reshim</code> is not resolving your issue, then it is most-likely due to the sourcing of <code>asdf.sh</code> or <code>asdf.fish</code> <em>not</em> being at the <strong>BOTTOM</strong> of your Shell config file (<code>.bash_profile</code>, <code>.zshrc</code>, <code>config.fish</code> etc). It needs to be sourced <strong>AFTER</strong> you have set your <code>$PATH</code> and <strong>AFTER</strong> you have sourced your framework (oh-my-zsh etc) if any.</p>',13),r=[s];function i(d,l,c,h,u,p){return o(),t("div",null,r)}const g=e(n,[["render",i]]);export{m as __pageData,g as default};
