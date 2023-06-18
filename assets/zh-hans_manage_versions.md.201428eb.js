import{_ as s,o as a,c as l,V as n}from"./chunks/framework.7ae304b1.js";const A=JSON.parse('{"title":"版本","description":"","frontmatter":{},"headers":[],"relativePath":"zh-hans/manage/versions.md","filePath":"zh-hans/manage/versions.md","lastUpdated":1687069487000}'),o={name:"zh-hans/manage/versions.md"},e=n(`<h1 id="版本" tabindex="-1">版本 <a class="header-anchor" href="#版本" aria-label="Permalink to &quot;版本&quot;">​</a></h1><h2 id="安装版本" tabindex="-1">安装版本 <a class="header-anchor" href="#安装版本" aria-label="Permalink to &quot;安装版本&quot;">​</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">asdf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">nam</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">versio</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># asdf install erlang 17.3</span></span></code></pre></div><p>如果一个插件支持从源代码下载和编译，你可以指定 <code>ref:foo</code>，其中 <code>foo</code> 是特定的分支、标签或者提交。卸载该版本时，你也需要使用相同的名称和引用。</p><h2 id="安装最新稳定版本" tabindex="-1">安装最新稳定版本 <a class="header-anchor" href="#安装最新稳定版本" aria-label="Permalink to &quot;安装最新稳定版本&quot;">​</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">asdf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">nam</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">latest</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># asdf install erlang latest</span></span></code></pre></div><p>安装给定字符串开头的最新稳定版本。</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">asdf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">nam</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">latest:</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">versio</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># asdf install erlang latest:17</span></span></code></pre></div><h2 id="列举已安装版本" tabindex="-1">列举已安装版本 <a class="header-anchor" href="#列举已安装版本" aria-label="Permalink to &quot;列举已安装版本&quot;">​</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">asdf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">list</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">nam</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># asdf list erlang</span></span></code></pre></div><p>筛选出以给定字符串开头的版本。</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">asdf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">list</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">nam</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">versio</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># asdf list erlang 17</span></span></code></pre></div><h2 id="列举所有可用版本" tabindex="-1">列举所有可用版本 <a class="header-anchor" href="#列举所有可用版本" aria-label="Permalink to &quot;列举所有可用版本&quot;">​</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">asdf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">list</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">all</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">nam</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># asdf list all erlang</span></span></code></pre></div><p>筛选出以给定字符串开头的版本。</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">asdf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">list</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">all</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">nam</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">versio</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># asdf list all erlang 17</span></span></code></pre></div><h2 id="显示最新稳定版本" tabindex="-1">显示最新稳定版本 <a class="header-anchor" href="#显示最新稳定版本" aria-label="Permalink to &quot;显示最新稳定版本&quot;">​</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">asdf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">latest</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">nam</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># asdf latest erlang</span></span></code></pre></div><p>显示以给定字符串开头的最新稳定版本。</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">asdf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">latest</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">nam</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">versio</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># asdf latest erlang 17</span></span></code></pre></div><h2 id="设置当前版本" tabindex="-1">设置当前版本 <a class="header-anchor" href="#设置当前版本" aria-label="Permalink to &quot;设置当前版本&quot;">​</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">asdf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">global</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">nam</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">versio</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> [&lt;version&gt;...]</span></span>
<span class="line"><span style="color:#FFCB6B;">asdf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">shell</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">nam</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">versio</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> [&lt;version&gt;...]</span></span>
<span class="line"><span style="color:#FFCB6B;">asdf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">local</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">nam</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">versio</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> [&lt;version&gt;...]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># asdf global elixir 1.2.4</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">asdf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">global</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">nam</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">latest[:</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">versio</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">&gt;</span><span style="color:#C3E88D;">]</span></span>
<span class="line"><span style="color:#FFCB6B;">asdf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">local</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">nam</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">latest[:</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">versio</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">&gt;</span><span style="color:#C3E88D;">]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># asdf global elixir latest</span></span></code></pre></div><p><code>global</code> 将版本写到 <code>$HOME/.tool-versions</code> 文件中。</p><p><code>shell</code> 仅为当前 shell 会话将版本设置为一个名为 <code>ASDF_\${LANG}_VERSION</code> 的环境变量。</p><p><code>local</code> 将版本写到 <code>$PWD/.tool-versions</code> 文件中，如果有需要也会创建此文件。</p><p>请查看 <a href="/zh-hans/manage/configuration.html">配置部分</a> 的 <code>.tool-versions</code> 文件了解更多详情。</p><div class="warning custom-block"><p class="custom-block-title">可选</p><p>如果你只是想为当前 shell 会话或者在特定工具版本下执行一条命令，你可以设置一个类似 <code>ASDF_\${TOOL}_VERSION</code> 的环境变量。</p></div><p>下面的示例在版本为 <code>1.4.0</code> 的 Elixir 项目上运行测试。 版本格式与 <code>.tool-versions</code> 文件支持的版本格式相同。</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">ASDF_ELIXIR_VERSION</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1.4</span><span style="color:#C3E88D;">.0</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">mix</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">test</span></span></code></pre></div><h2 id="回退到系统版本" tabindex="-1">回退到系统版本 <a class="header-anchor" href="#回退到系统版本" aria-label="Permalink to &quot;回退到系统版本&quot;">​</a></h2><p>要使用工具 <code>&lt;name&gt;</code> 的系统版本而非 asdf 管理版本，你可以将工具的版本设置为 <code>system</code>。</p><p>使用 <code>global</code>、<code>local</code> 或者 <code>shell</code> 设置系统，如上面的 <a href="#设置当前版本">设置当前版本</a> 部分所述。</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">asdf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">local</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">nam</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">system</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># asdf local python system</span></span></code></pre></div><h2 id="显示当前版本" tabindex="-1">显示当前版本 <a class="header-anchor" href="#显示当前版本" aria-label="Permalink to &quot;显示当前版本&quot;">​</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">asdf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">current</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># asdf current</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># erlang 17.3 (set by /Users/kim/.tool-versions)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># nodejs 6.11.5 (set by /Users/kim/cool-node-project/.tool-versions)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">asdf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">current</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">nam</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># asdf current erlang</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 17.3 (set by /Users/kim/.tool-versions)</span></span></code></pre></div><h2 id="卸载版本" tabindex="-1">卸载版本 <a class="header-anchor" href="#卸载版本" aria-label="Permalink to &quot;卸载版本&quot;">​</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">asdf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">uninstall</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">nam</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">versio</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># asdf uninstall erlang 17.3</span></span></code></pre></div><h2 id="垫片-shims" tabindex="-1">垫片（Shims） <a class="header-anchor" href="#垫片-shims" aria-label="Permalink to &quot;垫片（Shims）&quot;">​</a></h2><p>当 asdf 安装一个包时，它会在 <code>$ASDF_DATA_DIR/shims</code> 目录（默认为 <code>~/.asdf/shims</code>）中为该包中的每个可执行程序创建垫片。这个位于 <code>$PATH</code> 中（通过 <code>asdf.sh</code>、 <code>asdf.fish</code> 等等实现）的目录是已安装程序在环境中可用的方式。</p><p>垫片本身是非常简单的包装器，它 <code>exec</code> （执行）一个辅助程序 <code>asdf exec</code>，向其传递插件的名称和垫片正在包装的已安装包中的可执行程序的路径。</p><p><code>asdf exec</code> 辅助程序确定要使用的软件包版本（比如在 <code>.tool-versions</code> 文件中指定，通过 <code>asdf local ...</code> 或者 <code>asdf global ...</code> 命令选择）、软件包安装目录中的可执行程序的最终路径（这可以在插件中通过 <code>exec-path</code> 回调来操作）以及要在其中执行的环境（也由插件 - <code>exec-env</code> 脚本提供），最后完成执行。</p><div class="warning custom-block"><p class="custom-block-title">注意</p><p>因为此系统使用 <code>exec</code> 调用，所以软件包中的任何脚本如果要由 shell 生效而不是执行的脚本都需要直接访问，而不是通过垫片包装器进行访问。两个 <code>asdf</code> 命令：<code>which</code> 和 <code>where</code> 可以通过返回已安装软件包的路径来帮助解决这个问题。</p></div><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 返回当前版本中主要可执行程序的路径</span></span>
<span class="line"><span style="color:#82AAFF;">source</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$(</span><span style="color:#FFCB6B;">asdf</span><span style="color:#C3E88D;"> which </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">PLUGIN</span><span style="color:#89DDFF;">})</span><span style="color:#C3E88D;">/../script.sh</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 返回软件包安装目录的路径</span></span>
<span class="line"><span style="color:#82AAFF;">source</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$(</span><span style="color:#FFCB6B;">asdf</span><span style="color:#C3E88D;"> where </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">PLUGIN</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">$(</span><span style="color:#FFCB6B;">asdf</span><span style="color:#C3E88D;"> current </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">PLUGIN</span><span style="color:#89DDFF;">}))</span><span style="color:#C3E88D;">/bin/script.sh</span></span></code></pre></div><h3 id="绕过-asdf-垫片" tabindex="-1">绕过 asdf 垫片 <a class="header-anchor" href="#绕过-asdf-垫片" aria-label="Permalink to &quot;绕过 asdf 垫片&quot;">​</a></h3><p>如果由于某种原因，你希望绕过 asdf 垫片，或者希望在进入项目目录时自动设置环境变量，则 <a href="https://github.com/asdf-community/asdf-direnv" target="_blank" rel="noreferrer">asdf-direnv</a> 插件可能会有所帮助。请务必查看其 README 文件了解更多详情。</p>`,45),p=[e];function t(c,r,i,y,C,D){return a(),l("div",null,p)}const F=s(o,[["render",t]]);export{A as __pageData,F as default};
