import { g as be } from './chunk-B7RQU5TL-BJE0v3Ur.js';
const ge = (function () {
    return typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : window;
  })(),
  { FormData: we, Blob: Te, File: Gt } = ge;
/**
 * @license https://raw.githubusercontent.com/node-fetch/node-fetch/master/LICENSE.md
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2016 - 2020 Node Fetch Team
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * Extracted from https://github.com/node-fetch/node-fetch/blob/64c5c296a0250b852010746c76144cb9e14698d9/src/utils/form-data.js
 */ const U = `\r
`,
  G = '-'.repeat(2),
  je = Symbol.toStringTag,
  ke = (e) =>
    typeof e == 'object' &&
    typeof e.arrayBuffer == 'function' &&
    typeof e.type == 'string' &&
    typeof e.stream == 'function' &&
    typeof e.constructor == 'function' &&
    /^(Blob|File)$/.test(e[je]),
  Oe = (e) => `${G}${e}${G}${U.repeat(1)}`,
  Se = (e, n, o) => {
    let s = '';
    return (
      (s += `${G}${e}${U}`),
      (s += `Content-Disposition: form-data; name="${n}"`),
      typeof o != 'string' &&
        o.name !== 'blob' &&
        ((s += `; filename="${o.name}"${U}`),
        (s += `Content-Type: ${o.type || 'application/octet-stream'}`)),
      `${s}${U.repeat(2)}`
    );
  },
  ve = async function* (e, n) {
    for (const [o, s] of e)
      (yield Se(n, o, s),
        typeof s == 'string' ? yield s : yield await s.text(),
        yield U);
    yield Oe(n);
  },
  P = (e, n) => Object.keys(e).find((o) => o.toLowerCase() === n.toLowerCase()),
  x = (e, n) => {
    const o = P(e, n);
    if (o) return e[o];
  },
  B = (e, n) => !!P(e, n),
  Ce = [
    'application/json',
    'application/x-json',
    'text/json',
    'text/x-json',
    '+json',
  ],
  Pe = (e) => Ce.some((n) => e.includes(n)),
  X = (e, n) => {
    if (n.value === void 0) return e;
    const o = e[n.name];
    return o === void 0
      ? ((e[n.name] = n.value), e)
      : Array.isArray(o)
        ? (o.push(n.value), e)
        : ((e[n.name] = [o, n.value]), e);
  };
function Z(e) {
  return new URLSearchParams(
    Object.entries(e)
      .map(([n, o]) => (Array.isArray(o) ? o.map((s) => [n, s]) : [[n, o]]))
      .flat(1)
  );
}
class Ee extends URL {
  get path() {
    return this.pathname + this.search;
  }
}
const D = '',
  ee = `
`;
class w {
  constructor({ indent: n, join: o } = {}) {
    ((this.postProcessors = []),
      (this.code = []),
      (this.indentationCharacter = D),
      (this.lineJoin = ee),
      (this.indentLine = (s, a = 0) =>
        `${this.indentationCharacter.repeat(a)}${s}`),
      (this.unshift = (s, a) => {
        const l = this.indentLine(s, a);
        this.code.unshift(l);
      }),
      (this.push = (s, a) => {
        const l = this.indentLine(s, a);
        this.code.push(l);
      }),
      (this.blank = () => {
        this.code.push('');
      }),
      (this.join = () => {
        const s = this.code.join(this.lineJoin);
        return this.postProcessors.reduce((l, i) => i(l), s);
      }),
      (this.addPostProcessor = (s) => {
        this.postProcessors = [...this.postProcessors, s];
      }),
      (this.indentationCharacter = n || D),
      (this.lineJoin = o ?? ee));
  }
}
function L(e, n = {}) {
  const {
    delimiter: o = '"',
    escapeChar: s = '\\',
    escapeNewlines: a = !0,
  } = n;
  return [...e.toString()]
    .map((i) =>
      i === '\b'
        ? `${s}b`
        : i === '	'
          ? `${s}t`
          : i ===
              `
`
            ? a
              ? `${s}n`
              : i
            : i === '\f'
              ? `${s}f`
              : i === '\r'
                ? a
                  ? `${s}r`
                  : i
                : i === s
                  ? s + s
                  : i === o
                    ? s + o
                    : i < ' ' || i > '~'
                      ? JSON.stringify(i).slice(1, -1)
                      : i
    )
    .join('');
}
const _ = (e) => L(e, { delimiter: "'" }),
  O = (e) => L(e, { delimiter: '"' }),
  Re = {
    info: {
      key: 'libcurl',
      title: 'Libcurl',
      link: 'http://curl.haxx.se/libcurl',
      description: 'Simple REST and HTTP API Client for C',
    },
    convert: ({
      method: e,
      fullUrl: n,
      headersObj: o,
      allHeaders: s,
      postData: a,
    }) => {
      const { push: l, blank: i, join: t } = new w();
      (l('CURL *hnd = curl_easy_init();'),
        i(),
        l(
          `curl_easy_setopt(hnd, CURLOPT_CUSTOMREQUEST, "${e.toUpperCase()}");`
        ),
        l(`curl_easy_setopt(hnd, CURLOPT_URL, "${n}");`));
      const r = Object.keys(o);
      return (
        r.length &&
          (i(),
          l('struct curl_slist *headers = NULL;'),
          r.forEach((c) => {
            l(`headers = curl_slist_append(headers, "${c}: ${O(o[c])}");`);
          }),
          l('curl_easy_setopt(hnd, CURLOPT_HTTPHEADER, headers);')),
        s.cookie &&
          (i(), l(`curl_easy_setopt(hnd, CURLOPT_COOKIE, "${s.cookie}");`)),
        a?.text &&
          (i(),
          l(
            `curl_easy_setopt(hnd, CURLOPT_POSTFIELDS, ${JSON.stringify(a.text)});`
          )),
        i(),
        l('CURLcode ret = curl_easy_perform(hnd);'),
        t()
      );
    },
  },
  xe = {
    info: { key: 'c', title: 'C', extname: '.c', default: 'libcurl' },
    clientsById: { libcurl: Re },
  };
class te {
  constructor(n) {
    ((this.name = ''),
      (this.toString = () => `:${this.name}`),
      (this.name = n));
  }
}
class qe {
  constructor(n) {
    ((this.path = ''),
      (this.toString = () => `(clojure.java.io/file "${this.path}")`),
      (this.path = n));
  }
}
const fe = (e) =>
    e === void 0
      ? null
      : e === null
        ? 'null'
        : e.constructor.name.toLowerCase(),
  pe = (e) => (fe(e) === 'object' ? Object.keys(e).length === 0 : !1),
  ne = (e) => (
    Object.keys(e)
      .filter((n) => pe(e[n]))
      .forEach((n) => {
        delete e[n];
      }),
    e
  ),
  A = (e, n) => {
    const o = ' '.repeat(e);
    return n.replace(
      /\n/g,
      `
${o}`
    );
  },
  K = (e) => {
    switch (fe(e)) {
      case 'string':
        return `"${e.replace(/"/g, '\\"')}"`;
      case 'file':
        return e.toString();
      case 'keyword':
        return e.toString();
      case 'null':
        return 'nil';
      case 'regexp':
        return `#"${e.source}"`;
      case 'object': {
        const n = Object.keys(e)
          .reduce((o, s) => {
            const a = A(s.length + 2, K(e[s]));
            return `${o}:${s} ${a}
 `;
          }, '')
          .trim();
        return `{${A(1, n)}}`;
      }
      case 'array': {
        const n = e.reduce((o, s) => `${o} ${K(s)}`, '').trim();
        return `[${A(1, n)}]`;
      }
      default:
        return e.toString();
    }
  },
  Ne = {
    info: {
      key: 'clj_http',
      title: 'clj-http',
      link: 'https://github.com/dakrone/clj-http',
      description:
        'An idiomatic clojure http client wrapping the apache client.',
    },
    convert: (
      { queryObj: e, method: n, postData: o, url: s, allHeaders: a },
      l
    ) => {
      const { push: i, join: t } = new w({ indent: l?.indent }),
        r = ['get', 'post', 'put', 'delete', 'patch', 'head', 'options'];
      if (((n = n.toLowerCase()), !r.includes(n)))
        return (i('Method not supported'), t());
      const c = { headers: a, 'query-params': e };
      switch (o?.mimeType) {
        case 'application/json':
          {
            ((c['content-type'] = new te('json')),
              (c['form-params'] = o.jsonObj));
            const d = P(c.headers, 'content-type');
            d && delete c.headers[d];
          }
          break;
        case 'application/x-www-form-urlencoded':
          {
            c['form-params'] = o.paramsObj;
            const d = P(c.headers, 'content-type');
            d && delete c.headers[d];
          }
          break;
        case 'text/plain':
          {
            c.body = o.text;
            const d = P(c.headers, 'content-type');
            d && delete c.headers[d];
          }
          break;
        case 'multipart/form-data': {
          if (o.params) {
            c.multipart = o.params.map((p) =>
              p.fileName && !p.value
                ? { name: p.name, content: new qe(p.fileName) }
                : { name: p.name, content: p.value }
            );
            const d = P(c.headers, 'content-type');
            d && delete c.headers[d];
          }
          break;
        }
      }
      switch (x(c.headers, 'accept')) {
        case 'application/json':
          {
            c.accept = new te('json');
            const d = P(c.headers, 'accept');
            d && delete c.headers[d];
          }
          break;
      }
      if (
        (i(`(require '[clj-http.client :as client])
`),
        pe(ne(c)))
      )
        i(`(client/${n} "${s}")`);
      else {
        const d = 11 + n.length + s.length,
          p = A(d, K(ne(c)));
        i(`(client/${n} "${s}" ${p})`);
      }
      return t();
    },
  },
  Ue = {
    info: {
      key: 'clojure',
      title: 'Clojure',
      extname: '.clj',
      default: 'clj_http',
    },
    clientsById: { clj_http: Ne },
  },
  Le = (e) => {
    let n = x(e, 'accept-encoding');
    if (!n) return [];
    const o = {
        gzip: 'DecompressionMethods.GZip',
        deflate: 'DecompressionMethods.Deflate',
      },
      s = [];
    return (
      typeof n == 'string' && (n = [n]),
      n.forEach((a) => {
        a.split(',').forEach((l) => {
          const i = /\s*([^;\s]+)/.exec(l);
          if (i) {
            const t = o[i[1]];
            t && s.push(t);
          }
        });
      }),
      s
    );
  },
  _e = {
    info: {
      key: 'httpclient',
      title: 'HttpClient',
      link: 'https://docs.microsoft.com/en-us/dotnet/api/system.net.http.httpclient',
      description: '.NET Standard HTTP Client',
    },
    convert: ({ allHeaders: e, postData: n, method: o, fullUrl: s }, a) => {
      var l, i;
      const t = { indent: '    ', ...a },
        { push: r, join: c } = new w({ indent: t.indent });
      r('using System.Net.Http.Headers;');
      let d = '';
      const p = !!e.cookie,
        u = Le(e);
      ((p || u.length) &&
        ((d = 'clientHandler'),
        r('var clientHandler = new HttpClientHandler'),
        r('{'),
        p && r('UseCookies = false,', 1),
        u.length && r(`AutomaticDecompression = ${u.join(' | ')},`, 1),
        r('};')),
        r(`var client = new HttpClient(${d});`),
        r('var request = new HttpRequestMessage'),
        r('{'));
      const h = [
        'GET',
        'POST',
        'PUT',
        'DELETE',
        'PATCH',
        'HEAD',
        'OPTIONS',
        'TRACE',
      ];
      ((o = o.toUpperCase()),
        o && h.includes(o)
          ? (o = `HttpMethod.${o[0]}${o.substring(1).toLowerCase()}`)
          : (o = `new HttpMethod("${o}")`),
        r(`Method = ${o},`, 1),
        r(`RequestUri = new Uri("${s}"),`, 1));
      const f = Object.keys(e).filter((y) => {
        switch (y.toLowerCase()) {
          case 'content-type':
          case 'content-length':
          case 'accept-encoding':
            return !1;
          default:
            return !0;
        }
      });
      if (
        (f.length &&
          (r('Headers =', 1),
          r('{', 1),
          f.forEach((y) => {
            r(`{ "${y}", "${O(e[y])}" },`, 2);
          }),
          r('},', 1)),
        n?.text)
      ) {
        const y = n.mimeType;
        switch (y) {
          case 'application/x-www-form-urlencoded':
            (r(
              'Content = new FormUrlEncodedContent(new Dictionary<string, string>',
              1
            ),
              r('{', 1),
              (l = n.params) === null ||
                l === void 0 ||
                l.forEach((m) => {
                  r(`{ "${m.name}", "${m.value}" },`, 2);
                }),
              r('}),', 1));
            break;
          case 'multipart/form-data':
            (r('Content = new MultipartFormDataContent', 1),
              r('{', 1),
              (i = n.params) === null ||
                i === void 0 ||
                i.forEach((m) => {
                  (r(`new StringContent(${JSON.stringify(m.value || '')})`, 2),
                    r('{', 2),
                    r('Headers =', 3),
                    r('{', 3),
                    m.contentType &&
                      r(
                        `ContentType = new MediaTypeHeaderValue("${m.contentType}"),`,
                        4
                      ),
                    r(
                      'ContentDisposition = new ContentDispositionHeaderValue("form-data")',
                      4
                    ),
                    r('{', 4),
                    r(`Name = "${m.name}",`, 5),
                    m.fileName && r(`FileName = "${m.fileName}",`, 5),
                    r('}', 4),
                    r('}', 3),
                    r('},', 2));
                }),
              r('},', 1));
            break;
          default:
            (r(
              `Content = new StringContent(${JSON.stringify(n?.text || '')})`,
              1
            ),
              r('{', 1),
              r('Headers =', 2),
              r('{', 2),
              r(`ContentType = new MediaTypeHeaderValue("${y}")`, 3),
              r('}', 2),
              r('}', 1));
            break;
        }
      }
      return (
        r('};'),
        r('using (var response = await client.SendAsync(request))'),
        r('{'),
        r('response.EnsureSuccessStatusCode();', 1),
        r('var body = await response.Content.ReadAsStringAsync();', 1),
        r('Console.WriteLine(body);', 1),
        r('}'),
        c()
      );
    },
  },
  He = {
    info: {
      key: 'restsharp',
      title: 'RestSharp',
      link: 'http://restsharp.org/',
      description: 'Simple REST and HTTP API Client for .NET',
    },
    convert: ({
      allHeaders: e,
      method: n,
      fullUrl: o,
      headersObj: s,
      cookies: a,
      postData: l,
    }) => {
      const { push: i, join: t } = new w();
      if (
        !['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'].includes(
          n.toUpperCase()
        )
      )
        return 'Method not supported';
      if (
        (i(`var client = new RestClient("${o}");`),
        i(`var request = new RestRequest(Method.${n.toUpperCase()});`),
        Object.keys(s).forEach((c) => {
          i(`request.AddHeader("${c}", "${O(s[c])}");`);
        }),
        a?.forEach(({ name: c, value: d }) => {
          i(`request.AddCookie("${c}", "${d}");`);
        }),
        l?.text)
      ) {
        const c = x(e, 'content-type'),
          d = JSON.stringify(l.text);
        i(`request.AddParameter("${c}", ${d}, ParameterType.RequestBody);`);
      }
      return (i('IRestResponse response = client.Execute(request);'), t());
    },
  },
  Ie = {
    info: { key: 'csharp', title: 'C#', extname: '.cs', default: 'restsharp' },
    clientsById: { httpclient: _e, restsharp: He },
  },
  Ae = {
    info: {
      key: 'native',
      title: 'NewRequest',
      link: 'http://golang.org/pkg/net/http/#NewRequest',
      description: 'Golang HTTP client request',
    },
    convert: (
      { postData: e, method: n, allHeaders: o, fullUrl: s },
      a = {}
    ) => {
      const { blank: l, push: i, join: t } = new w({ indent: '	' }),
        {
          showBoilerplate: r = !0,
          checkErrors: c = !1,
          printBody: d = !0,
          timeout: p = -1,
          insecureSkipVerify: u = !1,
        } = a,
        h = c ? 'err' : '_',
        f = r ? 1 : 0,
        y = () => {
          c && (i('if err != nil {', f), i('panic(err)', f + 1), i('}', f));
        };
      (r &&
        (i('package main'),
        l(),
        i('import ('),
        i('"fmt"', f),
        p > 0 && i('"time"', f),
        u && i('"crypto/tls"', f),
        e?.text && i('"strings"', f),
        i('"net/http"', f),
        d && i('"io"', f),
        i(')'),
        l(),
        i('func main() {'),
        l()),
        u &&
          (i(
            'insecureTransport := http.DefaultTransport.(*http.Transport).Clone()',
            f
          ),
          i(
            'insecureTransport.TLSClientConfig = &tls.Config{InsecureSkipVerify: true}',
            f
          )));
      const m = p > 0,
        b = m || u,
        g = b ? 'client' : 'http.DefaultClient';
      return (
        b &&
          (i('client := http.Client{', f),
          m && i(`Timeout: time.Duration(${p} * time.Second),`, f + 1),
          u && i('Transport: insecureTransport,', f + 1),
          i('}', f),
          l()),
        i(`url := "${s}"`, f),
        l(),
        e?.text
          ? (i(`payload := strings.NewReader(${JSON.stringify(e.text)})`, f),
            l(),
            i(`req, ${h} := http.NewRequest("${n}", url, payload)`, f),
            l())
          : (i(`req, ${h} := http.NewRequest("${n}", url, nil)`, f), l()),
        y(),
        Object.keys(o).length &&
          (Object.keys(o).forEach(($) => {
            i(`req.Header.Add("${$}", "${O(o[$])}")`, f);
          }),
          l()),
        i(`res, ${h} := ${g}.Do(req)`, f),
        y(),
        d &&
          (l(),
          i('defer res.Body.Close()', f),
          i(`body, ${h} := io.ReadAll(res.Body)`, f),
          y()),
        l(),
        i('fmt.Println(res)', f),
        d && i('fmt.Println(string(body))', f),
        r && (l(), i('}')),
        t()
      );
    },
  },
  Be = {
    info: { key: 'go', title: 'Go', extname: '.go', default: 'native' },
    clientsById: { native: Ae },
  },
  re = `\r
`,
  Fe = {
    info: {
      key: 'http1.1',
      title: 'HTTP/1.1',
      link: 'https://tools.ietf.org/html/rfc7230',
      description: 'HTTP/1.1 request string in accordance with RFC 7230',
    },
    convert: (
      {
        method: e,
        fullUrl: n,
        uriObj: o,
        httpVersion: s,
        allHeaders: a,
        postData: l,
      },
      i
    ) => {
      const t = { absoluteURI: !1, autoContentLength: !0, autoHost: !0, ...i },
        { blank: r, push: c, join: d } = new w({ indent: '', join: re }),
        p = t.absoluteURI ? n : o.path;
      c(`${e} ${p} ${s}`);
      const u = Object.keys(a);
      (u.forEach((y) => {
        const m = y.toLowerCase().replace(/(^|-)(\w)/g, (b) => b.toUpperCase());
        c(`${m}: ${a[y]}`);
      }),
        t.autoHost && !u.includes('host') && c(`Host: ${o.host}`),
        t.autoContentLength &&
          l?.text &&
          !u.includes('content-length') &&
          c(`Content-Length: ${l.text.length}`),
        r());
      const h = d(),
        f = l?.text || '';
      return `${h}${re}${f}`;
    },
  },
  Me = {
    info: { key: 'http', title: 'HTTP', extname: null, default: '1.1' },
    clientsById: { 'http1.1': Fe },
  },
  Je = {
    info: {
      key: 'asynchttp',
      title: 'AsyncHttp',
      link: 'https://github.com/AsyncHttpClient/async-http-client',
      description: 'Asynchronous Http and WebSocket Client library for Java',
    },
    convert: ({ method: e, allHeaders: n, postData: o, fullUrl: s }, a) => {
      const l = { indent: '  ', ...a },
        { blank: i, push: t, join: r } = new w({ indent: l.indent });
      return (
        t('AsyncHttpClient client = new DefaultAsyncHttpClient();'),
        t(`client.prepare("${e.toUpperCase()}", "${s}")`),
        Object.keys(n).forEach((c) => {
          t(`.setHeader("${c}", "${O(n[c])}")`, 1);
        }),
        o?.text && t(`.setBody(${JSON.stringify(o.text)})`, 1),
        t('.execute()', 1),
        t('.toCompletableFuture()', 1),
        t('.thenAccept(System.out::println)', 1),
        t('.join();', 1),
        i(),
        t('client.close();'),
        r()
      );
    },
  },
  Ve = {
    info: {
      key: 'nethttp',
      title: 'java.net.http',
      link: 'https://openjdk.java.net/groups/net/httpclient/intro.html',
      description: 'Java Standardized HTTP Client API',
    },
    convert: ({ allHeaders: e, fullUrl: n, method: o, postData: s }, a) => {
      const l = { indent: '  ', ...a },
        { push: i, join: t } = new w({ indent: l.indent });
      return (
        i('HttpRequest request = HttpRequest.newBuilder()'),
        i(`.uri(URI.create("${n}"))`, 2),
        Object.keys(e).forEach((r) => {
          i(`.header("${r}", "${O(e[r])}")`, 2);
        }),
        s?.text
          ? i(
              `.method("${o.toUpperCase()}", HttpRequest.BodyPublishers.ofString(${JSON.stringify(s.text)}))`,
              2
            )
          : i(
              `.method("${o.toUpperCase()}", HttpRequest.BodyPublishers.noBody())`,
              2
            ),
        i('.build();', 2),
        i(
          'HttpResponse<String> response = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());'
        ),
        i('System.out.println(response.body());'),
        t()
      );
    },
  },
  ze = {
    info: {
      key: 'okhttp',
      title: 'OkHttp',
      link: 'http://square.github.io/okhttp/',
      description: 'An HTTP Request Client Library',
    },
    convert: ({ postData: e, method: n, fullUrl: o, allHeaders: s }, a) => {
      const l = { indent: '  ', ...a },
        { push: i, blank: t, join: r } = new w({ indent: l.indent }),
        c = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD'],
        d = ['POST', 'PUT', 'DELETE', 'PATCH'];
      return (
        i('OkHttpClient client = new OkHttpClient();'),
        t(),
        e?.text &&
          (e.boundary
            ? i(
                `MediaType mediaType = MediaType.parse("${e.mimeType}; boundary=${e.boundary}");`
              )
            : i(`MediaType mediaType = MediaType.parse("${e.mimeType}");`),
          i(
            `RequestBody body = RequestBody.create(mediaType, ${JSON.stringify(e.text)});`
          )),
        i('Request request = new Request.Builder()'),
        i(`.url("${o}")`, 1),
        c.includes(n.toUpperCase())
          ? d.includes(n.toUpperCase())
            ? e?.text
              ? i(`.${n.toLowerCase()}(body)`, 1)
              : i(`.${n.toLowerCase()}(null)`, 1)
            : i(`.${n.toLowerCase()}()`, 1)
          : e?.text
            ? i(`.method("${n.toUpperCase()}", body)`, 1)
            : i(`.method("${n.toUpperCase()}", null)`, 1),
        Object.keys(s).forEach((p) => {
          i(`.addHeader("${p}", "${O(s[p])}")`, 1);
        }),
        i('.build();', 1),
        t(),
        i('Response response = client.newCall(request).execute();'),
        r()
      );
    },
  },
  We = {
    info: {
      key: 'unirest',
      title: 'Unirest',
      link: 'http://unirest.io/java.html',
      description: 'Lightweight HTTP Request Client Library',
    },
    convert: ({ method: e, allHeaders: n, postData: o, fullUrl: s }, a) => {
      const l = { indent: '  ', ...a },
        { join: i, push: t } = new w({ indent: l.indent });
      return (
        ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'].includes(
          e.toUpperCase()
        )
          ? t(
              `HttpResponse<String> response = Unirest.${e.toLowerCase()}("${s}")`
            )
          : t(
              `HttpResponse<String> response = Unirest.customMethod("${e.toUpperCase()}","${s}")`
            ),
        Object.keys(n).forEach((c) => {
          t(`.header("${c}", "${O(n[c])}")`, 1);
        }),
        o?.text && t(`.body(${JSON.stringify(o.text)})`, 1),
        t('.asString();', 1),
        i()
      );
    },
  },
  Ge = {
    info: { key: 'java', title: 'Java', extname: '.java', default: 'unirest' },
    clientsById: { asynchttp: Je, nethttp: Ve, okhttp: ze, unirest: We },
  };
var M, oe;
function Ke() {
  return (
    oe ||
      ((oe = 1),
      (M = function (e) {
        return Object.prototype.toString.call(e) === '[object RegExp]';
      })),
    M
  );
}
var J, ie;
function Qe() {
  return (
    ie ||
      ((ie = 1),
      (J = function (e) {
        var n = typeof e;
        return e !== null && (n === 'object' || n === 'function');
      })),
    J
  );
}
var I = {},
  se;
function Ye() {
  return (
    se ||
      ((se = 1),
      Object.defineProperty(I, '__esModule', { value: !0 }),
      (I.default = (e) =>
        Object.getOwnPropertySymbols(e).filter((n) =>
          Object.prototype.propertyIsEnumerable.call(e, n)
        ))),
    I
  );
}
var V, ce;
function Xe() {
  if (ce) return V;
  ce = 1;
  const e = Ke(),
    n = Qe(),
    o = Ye().default;
  return (
    (V = (s, a, l) => {
      const i = [];
      return (function t(r, c, d) {
        ((c = c || {}), (c.indent = c.indent || '	'), (d = d || ''));
        let p;
        c.inlineCharacterLimit === void 0
          ? (p = {
              newLine: `
`,
              newLineOrSpace: `
`,
              pad: d,
              indent: d + c.indent,
            })
          : (p = {
              newLine: '@@__STRINGIFY_OBJECT_NEW_LINE__@@',
              newLineOrSpace: '@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@',
              pad: '@@__STRINGIFY_OBJECT_PAD__@@',
              indent: '@@__STRINGIFY_OBJECT_INDENT__@@',
            });
        const u = (h) => {
          if (c.inlineCharacterLimit === void 0) return h;
          const f = h
            .replace(new RegExp(p.newLine, 'g'), '')
            .replace(new RegExp(p.newLineOrSpace, 'g'), ' ')
            .replace(new RegExp(p.pad + '|' + p.indent, 'g'), '');
          return f.length <= c.inlineCharacterLimit
            ? f
            : h
                .replace(
                  new RegExp(p.newLine + '|' + p.newLineOrSpace, 'g'),
                  `
`
                )
                .replace(new RegExp(p.pad, 'g'), d)
                .replace(new RegExp(p.indent, 'g'), d + c.indent);
        };
        if (i.indexOf(r) !== -1) return '"[Circular]"';
        if (
          r == null ||
          typeof r == 'number' ||
          typeof r == 'boolean' ||
          typeof r == 'function' ||
          typeof r == 'symbol' ||
          e(r)
        )
          return String(r);
        if (r instanceof Date) return `new Date('${r.toISOString()}')`;
        if (Array.isArray(r)) {
          if (r.length === 0) return '[]';
          i.push(r);
          const h =
            '[' +
            p.newLine +
            r
              .map((f, y) => {
                const m =
                  r.length - 1 === y ? p.newLine : ',' + p.newLineOrSpace;
                let b = t(f, c, d + c.indent);
                return (
                  c.transform && (b = c.transform(r, y, b)),
                  p.indent + b + m
                );
              })
              .join('') +
            p.pad +
            ']';
          return (i.pop(), u(h));
        }
        if (n(r)) {
          let h = Object.keys(r).concat(o(r));
          if (
            (c.filter && (h = h.filter((y) => c.filter(r, y))), h.length === 0)
          )
            return '{}';
          i.push(r);
          const f =
            '{' +
            p.newLine +
            h
              .map((y, m) => {
                const b =
                    h.length - 1 === m ? p.newLine : ',' + p.newLineOrSpace,
                  g = typeof y == 'symbol',
                  $ = !g && /^[a-z$_][a-z$_0-9]*$/i.test(y),
                  T = g || $ ? y : t(y, c);
                let S = t(r[y], c, d + c.indent);
                return (
                  c.transform && (S = c.transform(r, y, S)),
                  p.indent + String(T) + ': ' + S + b
                );
              })
              .join('') +
            p.pad +
            '}';
          return (i.pop(), u(f));
        }
        return (
          (r = String(r).replace(/[\r\n]/g, (h) =>
            h ===
            `
`
              ? '\\n'
              : '\\r'
          )),
          c.singleQuotes === !1
            ? ((r = r.replace(/"/g, '\\"')), `"${r}"`)
            : ((r = r.replace(/\\?'/g, "\\'")), `'${r}'`)
        );
      })(s, a, l);
    }),
    V
  );
}
var Ze = Xe();
const C = be(Ze),
  De = {
    info: {
      key: 'axios',
      title: 'Axios',
      link: 'https://github.com/axios/axios',
      description: 'Promise based HTTP client for the browser and node.js',
    },
    convert: (
      { allHeaders: e, method: n, url: o, queryObj: s, postData: a },
      l
    ) => {
      const i = { indent: '  ', ...l },
        {
          blank: t,
          push: r,
          join: c,
          addPostProcessor: d,
        } = new w({ indent: i.indent });
      (r("import axios from 'axios';"), t());
      const p = { method: n, url: o };
      switch (
        (Object.keys(s).length && (p.params = s),
        Object.keys(e).length && (p.headers = e),
        a?.mimeType)
      ) {
        case 'application/x-www-form-urlencoded':
          a.params &&
            (r('const encodedParams = new URLSearchParams();'),
            a.params.forEach((h) => {
              r(`encodedParams.set('${h.name}', '${h.value}');`);
            }),
            t(),
            (p.data = 'encodedParams,'),
            d((h) => h.replace(/'encodedParams,'/, 'encodedParams,')));
          break;
        case 'application/json':
          a.jsonObj && (p.data = a.jsonObj);
          break;
        case 'multipart/form-data':
          if (!a.params) break;
          (r('const form = new FormData();'),
            a.params.forEach((h) => {
              r(`form.append('${h.name}', '${h.value || h.fileName || ''}');`);
            }),
            t(),
            (p.data = '[form]'));
          break;
        default:
          a?.text && (p.data = a.text);
      }
      const u = C(p, { indent: '  ', inlineCharacterLimit: 80 }).replace(
        '"[form]"',
        'form'
      );
      return (
        r(`const options = ${u};`),
        t(),
        r('try {'),
        r('const { data } = await axios.request(options);', 1),
        r('console.log(data);', 1),
        r('} catch (error) {'),
        r('console.error(error);', 1),
        r('}'),
        c()
      );
    },
  },
  et = {
    info: {
      key: 'fetch',
      title: 'fetch',
      link: 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch',
      description: 'Perform asynchronous HTTP requests with the Fetch API',
    },
    convert: ({ method: e, allHeaders: n, postData: o, fullUrl: s }, a) => {
      const l = { indent: '  ', credentials: null, ...a },
        { blank: i, join: t, push: r } = new w({ indent: l.indent }),
        c = { method: e };
      switch (
        (Object.keys(n).length && (c.headers = n),
        l.credentials !== null && (c.credentials = l.credentials),
        r(`const url = '${s}';`),
        o?.mimeType)
      ) {
        case 'application/x-www-form-urlencoded':
          c.body = o.paramsObj ? o.paramsObj : o.text;
          break;
        case 'application/json':
          c.body = JSON.stringify(o.jsonObj);
          break;
        case 'multipart/form-data':
          if (!o.params) break;
          const d = P(n, 'content-type');
          (d && delete n[d],
            r('const form = new FormData();'),
            o.params.forEach((p) => {
              r(`form.append('${p.name}', '${p.value || p.fileName || ''}');`);
            }),
            i());
          break;
        default:
          o?.text && (c.body = o.text);
      }
      return (
        c.headers && !Object.keys(c.headers).length && delete c.headers,
        r(
          `const options = ${C(c, { indent: l.indent, inlineCharacterLimit: 80, transform: (d, p, u) => (p === 'body' && o && o.mimeType === 'application/x-www-form-urlencoded' ? `new URLSearchParams(${u})` : u) })};`
        ),
        i(),
        o?.params &&
          o.mimeType === 'multipart/form-data' &&
          (r('options.body = form;'), i()),
        r('try {'),
        r('const response = await fetch(url, options);', 1),
        r('const data = await response.json();', 1),
        r('console.log(data);', 1),
        r('} catch (error) {'),
        r('console.error(error);', 1),
        r('}'),
        t()
      );
    },
  },
  tt = {
    info: {
      key: 'jquery',
      title: 'jQuery',
      link: 'http://api.jquery.com/jquery.ajax/',
      description: 'Perform an asynchronous HTTP (Ajax) requests with jQuery',
    },
    convert: ({ fullUrl: e, method: n, allHeaders: o, postData: s }, a) => {
      var l;
      const i = { indent: '  ', ...a },
        { blank: t, push: r, join: c } = new w({ indent: i.indent }),
        d = { async: !0, crossDomain: !0, url: e, method: n, headers: o };
      switch (s?.mimeType) {
        case 'application/x-www-form-urlencoded':
          d.data = s.paramsObj ? s.paramsObj : s.text;
          break;
        case 'application/json':
          ((d.processData = !1), (d.data = s.text));
          break;
        case 'multipart/form-data':
          if (!s.params) break;
          if (
            (r('const form = new FormData();'),
            s.params.forEach((u) => {
              r(`form.append('${u.name}', '${u.value || u.fileName || ''}');`);
            }),
            (d.processData = !1),
            (d.contentType = !1),
            (d.mimeType = 'multipart/form-data'),
            (d.data = '[form]'),
            B(o, 'content-type') &&
              !((l = x(o, 'content-type')) === null || l === void 0) &&
              l.includes('boundary'))
          ) {
            const u = P(o, 'content-type');
            u && delete d.headers[u];
          }
          t();
          break;
        default:
          s?.text && (d.data = s.text);
      }
      const p = C(d, { indent: i.indent }).replace("'[form]'", 'form');
      return (
        r(`const settings = ${p};`),
        t(),
        r('$.ajax(settings).done(function (response) {'),
        r('console.log(response);', 1),
        r('});'),
        c()
      );
    },
  },
  nt = {
    info: {
      key: 'xhr',
      title: 'XMLHttpRequest',
      link: 'https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest',
      description:
        'W3C Standard API that provides scripted client functionality',
    },
    convert: ({ postData: e, allHeaders: n, method: o, fullUrl: s }, a) => {
      var l;
      const i = { indent: '  ', cors: !0, ...a },
        { blank: t, push: r, join: c } = new w({ indent: i.indent });
      switch (e?.mimeType) {
        case 'application/json':
          (r(
            `const data = JSON.stringify(${C(e.jsonObj, { indent: i.indent })});`
          ),
            t());
          break;
        case 'multipart/form-data':
          if (!e.params) break;
          if (
            (r('const data = new FormData();'),
            e.params.forEach((d) => {
              r(`data.append('${d.name}', '${d.value || d.fileName || ''}');`);
            }),
            B(n, 'content-type') &&
              !((l = x(n, 'content-type')) === null || l === void 0) &&
              l.includes('boundary'))
          ) {
            const d = P(n, 'content-type');
            d && delete n[d];
          }
          t();
          break;
        default:
          (r(`const data = ${e?.text ? `'${e.text}'` : 'null'};`), t());
      }
      return (
        r('const xhr = new XMLHttpRequest();'),
        i.cors && r('xhr.withCredentials = true;'),
        t(),
        r("xhr.addEventListener('readystatechange', function () {"),
        r('if (this.readyState === this.DONE) {', 1),
        r('console.log(this.responseText);', 2),
        r('}', 1),
        r('});'),
        t(),
        r(`xhr.open('${o}', '${s}');`),
        Object.keys(n).forEach((d) => {
          r(`xhr.setRequestHeader('${d}', '${_(n[d])}');`);
        }),
        t(),
        r('xhr.send(data);'),
        c()
      );
    },
  },
  rt = {
    info: {
      key: 'javascript',
      title: 'JavaScript',
      extname: '.js',
      default: 'xhr',
    },
    clientsById: { xhr: nt, axios: De, fetch: et, jquery: tt },
  },
  ot = {
    info: {
      key: 'okhttp',
      title: 'OkHttp',
      link: 'http://square.github.io/okhttp/',
      description: 'An HTTP Request Client Library',
    },
    convert: ({ postData: e, fullUrl: n, method: o, allHeaders: s }, a) => {
      const l = { indent: '  ', ...a },
        { blank: i, join: t, push: r } = new w({ indent: l.indent }),
        c = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD'],
        d = ['POST', 'PUT', 'DELETE', 'PATCH'];
      return (
        r('val client = OkHttpClient()'),
        i(),
        e?.text &&
          (e.boundary
            ? r(
                `val mediaType = MediaType.parse("${e.mimeType}; boundary=${e.boundary}")`
              )
            : r(`val mediaType = MediaType.parse("${e.mimeType}")`),
          r(
            `val body = RequestBody.create(mediaType, ${JSON.stringify(e.text)})`
          )),
        r('val request = Request.Builder()'),
        r(`.url("${n}")`, 1),
        c.includes(o.toUpperCase())
          ? d.includes(o.toUpperCase())
            ? e?.text
              ? r(`.${o.toLowerCase()}(body)`, 1)
              : r(`.${o.toLowerCase()}(null)`, 1)
            : r(`.${o.toLowerCase()}()`, 1)
          : e?.text
            ? r(`.method("${o.toUpperCase()}", body)`, 1)
            : r(`.method("${o.toUpperCase()}", null)`, 1),
        Object.keys(s).forEach((p) => {
          r(`.addHeader("${p}", "${O(s[p])}")`, 1);
        }),
        r('.build()', 1),
        i(),
        r('val response = client.newCall(request).execute()'),
        t()
      );
    },
  },
  it = {
    info: { key: 'kotlin', title: 'Kotlin', extname: '.kt', default: 'okhttp' },
    clientsById: { okhttp: ot },
  },
  st = {
    info: {
      key: 'axios',
      title: 'Axios',
      link: 'https://github.com/axios/axios',
      description: 'Promise based HTTP client for the browser and node.js',
    },
    convert: (
      { method: e, url: n, queryObj: o, allHeaders: s, postData: a },
      l
    ) => {
      const i = { indent: '  ', ...l },
        {
          blank: t,
          join: r,
          push: c,
          addPostProcessor: d,
        } = new w({ indent: i.indent });
      c("const axios = require('axios').default;");
      const p = { method: e, url: n };
      switch (
        (Object.keys(o).length && (p.params = o),
        Object.keys(s).length && (p.headers = s),
        a?.mimeType)
      ) {
        case 'application/x-www-form-urlencoded':
          a.params &&
            (c("const { URLSearchParams } = require('url');"),
            t(),
            c('const encodedParams = new URLSearchParams();'),
            a.params.forEach((h) => {
              c(`encodedParams.set('${h.name}', '${h.value}');`);
            }),
            t(),
            (p.data = 'encodedParams,'),
            d((h) => h.replace(/'encodedParams,'/, 'encodedParams,')));
          break;
        case 'application/json':
          (t(), a.jsonObj && (p.data = a.jsonObj));
          break;
        default:
          (t(), a?.text && (p.data = a.text));
      }
      const u = C(p, { indent: '  ', inlineCharacterLimit: 80 });
      return (
        c(`const options = ${u};`),
        t(),
        c('try {'),
        c('const { data } = await axios.request(options);', 1),
        c('console.log(data);', 1),
        c('} catch (error) {'),
        c('console.error(error);', 1),
        c('}'),
        r()
      );
    },
  },
  ct = {
    info: {
      key: 'fetch',
      title: 'Fetch',
      link: 'https://github.com/bitinn/node-fetch',
      description: 'Simplified HTTP node-fetch client',
    },
    convert: (
      { method: e, fullUrl: n, postData: o, headersObj: s, cookies: a },
      l
    ) => {
      var i;
      const t = { indent: '  ', ...l };
      let r = !1;
      const {
        blank: c,
        push: d,
        join: p,
        unshift: u,
      } = new w({ indent: t.indent });
      (d("const fetch = require('node-fetch');"), c());
      const h = { method: e };
      switch ((Object.keys(s).length && (h.headers = s), o?.mimeType)) {
        case 'application/x-www-form-urlencoded':
          (u("const { URLSearchParams } = require('url');"),
            d('const encodedParams = new URLSearchParams();'),
            (i = o.params) === null ||
              i === void 0 ||
              i.forEach((m) => {
                d(`encodedParams.set('${m.name}', '${m.value}');`);
              }),
            c(),
            (h.body = 'encodedParams'));
          break;
        case 'application/json':
          o.jsonObj && (h.body = JSON.stringify(o.jsonObj));
          break;
        case 'multipart/form-data':
          if (!o.params) break;
          const y = P(s, 'content-type');
          (y && delete s[y],
            u("const FormData = require('form-data');"),
            d('const formData = new FormData();'),
            o.params.forEach((m) => {
              if (!m.fileName && !m.fileName && !m.contentType) {
                d(`formData.append('${m.name}', '${m.value}');`);
                return;
              }
              m.fileName &&
                ((r = !0),
                d(
                  `formData.append('${m.name}', fs.createReadStream('${m.fileName}'));`
                ));
            }),
            c());
          break;
        default:
          o?.text && (h.body = o.text);
      }
      if (a.length) {
        const y = a
          .map(
            (m) =>
              `${encodeURIComponent(m.name)}=${encodeURIComponent(m.value)}`
          )
          .join('; ');
        (h.headers || (h.headers = {}), (h.headers.cookie = y));
      }
      (d(`const url = '${n}';`),
        h.headers && !Object.keys(h.headers).length && delete h.headers);
      const f = C(h, { indent: '  ', inlineCharacterLimit: 80 });
      return (
        d(`const options = ${f};`),
        r && u("const fs = require('fs');"),
        o?.params &&
          o.mimeType === 'multipart/form-data' &&
          d('options.body = formData;'),
        c(),
        d('try {'),
        d('const response = await fetch(url, options);', 1),
        d('const data = await response.json();', 1),
        d('console.log(data);', 1),
        d('} catch (error) {'),
        d('console.error(error);', 1),
        d('}'),
        p()
          .replace(/'encodedParams'/, 'encodedParams')
          .replace(
            /"fs\.createReadStream\(\\"(.+)\\"\)"/,
            'fs.createReadStream("$1")'
          )
      );
    },
  },
  at = {
    info: {
      key: 'native',
      title: 'HTTP',
      link: 'http://nodejs.org/api/http.html#http_http_request_options_callback',
      description: 'Node.js native HTTP interface',
    },
    convert: ({ uriObj: e, method: n, allHeaders: o, postData: s }, a = {}) => {
      const { indent: l = '  ', insecureSkipVerify: i = !1 } = a,
        { blank: t, join: r, push: c, unshift: d } = new w({ indent: l }),
        p = {
          method: n,
          hostname: e.hostname,
          port: e.port === '' ? null : e.port,
          path: e.path,
          headers: o,
          ...(i ? { rejectUnauthorized: !1 } : {}),
        };
      switch (
        (c(`const http = require('${e.protocol.replace(':', '')}');`),
        t(),
        c(`const options = ${C(p, { indent: l })};`),
        t(),
        c('const req = http.request(options, function (res) {'),
        c('const chunks = [];', 1),
        t(),
        c("res.on('data', function (chunk) {", 1),
        c('chunks.push(chunk);', 2),
        c('});', 1),
        t(),
        c("res.on('end', function () {", 1),
        c('const body = Buffer.concat(chunks);', 2),
        c('console.log(body.toString());', 2),
        c('});', 1),
        c('});'),
        t(),
        s?.mimeType)
      ) {
        case 'application/x-www-form-urlencoded':
          s.paramsObj &&
            (d("const qs = require('querystring');"),
            c(
              `req.write(qs.stringify(${C(s.paramsObj, { indent: '  ', inlineCharacterLimit: 80 })}));`
            ));
          break;
        case 'application/json':
          s.jsonObj &&
            c(
              `req.write(JSON.stringify(${C(s.jsonObj, { indent: '  ', inlineCharacterLimit: 80 })}));`
            );
          break;
        default:
          s?.text && c(`req.write(${C(s.text, { indent: l })});`);
      }
      return (c('req.end();'), r());
    },
  },
  lt = {
    info: {
      key: 'request',
      title: 'Request',
      link: 'https://github.com/request/request',
      description: 'Simplified HTTP request client',
    },
    convert: (
      {
        method: e,
        url: n,
        queryObj: o,
        postData: s,
        headersObj: a,
        cookies: l,
      },
      i
    ) => {
      const t = { indent: '  ', ...i };
      let r = !1;
      const {
        push: c,
        blank: d,
        join: p,
        unshift: u,
      } = new w({ indent: t.indent });
      (c("const request = require('request');"), d());
      const h = { method: e, url: n };
      switch (
        (Object.keys(o).length && (h.qs = o),
        Object.keys(a).length && (h.headers = a),
        s?.mimeType)
      ) {
        case 'application/x-www-form-urlencoded':
          h.form = s.paramsObj;
          break;
        case 'application/json':
          s.jsonObj && ((h.body = s.jsonObj), (h.json = !0));
          break;
        case 'multipart/form-data':
          if (!s.params) break;
          ((h.formData = {}),
            s.params.forEach((f) => {
              if (!f.fileName && !f.fileName && !f.contentType) {
                h.formData[f.name] = f.value;
                return;
              }
              let y = {};
              (f.fileName
                ? ((r = !0),
                  (y = {
                    value: `fs.createReadStream(${f.fileName})`,
                    options: {
                      filename: f.fileName,
                      contentType: f.contentType ? f.contentType : null,
                    },
                  }))
                : f.value && (y.value = f.value),
                (h.formData[f.name] = y));
            }));
          break;
        default:
          s?.text && (h.body = s.text);
      }
      return (
        l.length &&
          ((h.jar = 'JAR'),
          c('const jar = request.jar();'),
          l.forEach((f) => {
            c(
              `jar.setCookie(request.cookie('${encodeURIComponent(f.name)}=${encodeURIComponent(f.value)}'), '${n}');`
            );
          }),
          d()),
        r && u("const fs = require('fs');"),
        c(
          `const options = ${C(h, { indent: '  ', inlineCharacterLimit: 80 })};`
        ),
        d(),
        c('request(options, function (error, response, body) {'),
        c('if (error) throw new Error(error);', 1),
        d(),
        c('console.log(body);', 1),
        c('});'),
        p()
          .replace("'JAR'", 'jar')
          .replace(
            /'fs\.createReadStream\((.*)\)'/,
            "fs.createReadStream('$1')"
          )
      );
    },
  },
  dt = {
    info: {
      key: 'unirest',
      title: 'Unirest',
      link: 'http://unirest.io/nodejs.html',
      description: 'Lightweight HTTP Request Client Library',
    },
    convert: (
      {
        method: e,
        url: n,
        cookies: o,
        queryObj: s,
        postData: a,
        headersObj: l,
      },
      i
    ) => {
      const t = { indent: '  ', ...i };
      let r = !1;
      const {
        addPostProcessor: c,
        blank: d,
        join: p,
        push: u,
        unshift: h,
      } = new w({ indent: t.indent });
      switch (
        (u("const unirest = require('unirest');"),
        d(),
        u(`const req = unirest('${e}', '${n}');`),
        d(),
        o.length &&
          (u('const CookieJar = unirest.jar();'),
          o.forEach((f) => {
            u(
              `CookieJar.add('${encodeURIComponent(f.name)}=${encodeURIComponent(f.value)}', '${n}');`
            );
          }),
          u('req.jar(CookieJar);'),
          d()),
        Object.keys(s).length &&
          (u(`req.query(${C(s, { indent: t.indent })});`), d()),
        Object.keys(l).length &&
          (u(`req.headers(${C(l, { indent: t.indent })});`), d()),
        a?.mimeType)
      ) {
        case 'application/x-www-form-urlencoded':
          a.paramsObj &&
            (u(`req.form(${C(a.paramsObj, { indent: t.indent })});`), d());
          break;
        case 'application/json':
          a.jsonObj &&
            (u("req.type('json');"),
            u(`req.send(${C(a.jsonObj, { indent: t.indent })});`),
            d());
          break;
        case 'multipart/form-data': {
          if (!a.params) break;
          const f = [];
          (a.params.forEach((y) => {
            const m = {};
            (y.fileName && !y.value
              ? ((r = !0),
                (m.body = `fs.createReadStream('${y.fileName}')`),
                c((b) =>
                  b.replace(
                    /'fs\.createReadStream\(\\'(.+)\\'\)'/,
                    "fs.createReadStream('$1')"
                  )
                ))
              : y.value && (m.body = y.value),
              m.body &&
                (y.contentType && (m['content-type'] = y.contentType),
                f.push(m)));
          }),
            u(`req.multipart(${C(f, { indent: t.indent })});`),
            d());
          break;
        }
        default:
          a?.text && (u(`req.send(${C(a.text, { indent: t.indent })});`), d());
      }
      return (
        r && h("const fs = require('fs');"),
        u('req.end(function (res) {'),
        u('if (res.error) throw new Error(res.error);', 1),
        d(),
        u('console.log(res.body);', 1),
        u('});'),
        p()
      );
    },
  },
  ut = {
    info: { key: 'node', title: 'Node.js', extname: '.js', default: 'native' },
    clientsById: { native: at, request: lt, unirest: dt, axios: st, fetch: ct },
  },
  z = (e, n, o, s) => {
    const a = `${e} *${n} = `,
      l = Q(o, s ? a.length : void 0);
    return `${a}${l};`;
  },
  Q = (e, n) => {
    const o =
      n === void 0
        ? ', '
        : `,
   ${' '.repeat(n)}`;
    switch (Object.prototype.toString.call(e)) {
      case '[object Number]':
        return `@${e}`;
      case '[object Array]':
        return `@[ ${e.map((a) => Q(a)).join(o)} ]`;
      case '[object Object]': {
        const s = [];
        for (const a in e) s.push(`@"${a}": ${Q(e[a])}`);
        return `@{ ${s.join(o)} }`;
      }
      case '[object Boolean]':
        return e ? '@YES' : '@NO';
      default:
        return e == null ? '' : `@"${e.toString().replace(/"/g, '\\"')}"`;
    }
  },
  ft = {
    info: {
      key: 'nsurlsession',
      title: 'NSURLSession',
      link: 'https://developer.apple.com/library/mac/documentation/Foundation/Reference/NSURLSession_class/index.html',
      description: "Foundation's NSURLSession request",
    },
    convert: ({ allHeaders: e, postData: n, method: o, fullUrl: s }, a) => {
      var l;
      const i = { indent: '    ', pretty: !0, timeout: 10, ...a },
        { push: t, join: r, blank: c } = new w({ indent: i.indent }),
        d = { hasHeaders: !1, hasBody: !1 };
      if (
        (t('#import <Foundation/Foundation.h>'),
        Object.keys(e).length &&
          ((d.hasHeaders = !0),
          c(),
          t(z('NSDictionary', 'headers', e, i.pretty))),
        n && (n.text || n.jsonObj || n.params))
      )
        switch (((d.hasBody = !0), n.mimeType)) {
          case 'application/x-www-form-urlencoded':
            if (!((l = n.params) === null || l === void 0) && l.length) {
              c();
              const [p, ...u] = n.params;
              (t(
                `NSMutableData *postData = [[NSMutableData alloc] initWithData:[@"${p.name}=${p.value}" dataUsingEncoding:NSUTF8StringEncoding]];`
              ),
                u.forEach(({ name: h, value: f }) => {
                  t(
                    `[postData appendData:[@"&${h}=${f}" dataUsingEncoding:NSUTF8StringEncoding]];`
                  );
                }));
            } else d.hasBody = !1;
            break;
          case 'application/json':
            n.jsonObj &&
              (t(z('NSDictionary', 'parameters', n.jsonObj, i.pretty)),
              c(),
              t(
                'NSData *postData = [NSJSONSerialization dataWithJSONObject:parameters options:0 error:nil];'
              ));
            break;
          case 'multipart/form-data':
            (t(z('NSArray', 'parameters', n.params || [], i.pretty)),
              t(`NSString *boundary = @"${n.boundary}";`),
              c(),
              t('NSError *error;'),
              t('NSMutableString *body = [NSMutableString string];'),
              t('for (NSDictionary *param in parameters) {'),
              t('[body appendFormat:@"--%@\\r\\n", boundary];', 1),
              t('if (param[@"fileName"]) {', 1),
              t(
                '[body appendFormat:@"Content-Disposition:form-data; name=\\"%@\\"; filename=\\"%@\\"\\r\\n", param[@"name"], param[@"fileName"]];',
                2
              ),
              t(
                '[body appendFormat:@"Content-Type: %@\\r\\n\\r\\n", param[@"contentType"]];',
                2
              ),
              t(
                '[body appendFormat:@"%@", [NSString stringWithContentsOfFile:param[@"fileName"] encoding:NSUTF8StringEncoding error:&error]];',
                2
              ),
              t('if (error) {', 2),
              t('NSLog(@"%@", error);', 3),
              t('}', 2),
              t('} else {', 1),
              t(
                '[body appendFormat:@"Content-Disposition:form-data; name=\\"%@\\"\\r\\n\\r\\n", param[@"name"]];',
                2
              ),
              t('[body appendFormat:@"%@", param[@"value"]];', 2),
              t('}', 1),
              t('}'),
              t('[body appendFormat:@"\\r\\n--%@--\\r\\n", boundary];'),
              t(
                'NSData *postData = [body dataUsingEncoding:NSUTF8StringEncoding];'
              ));
            break;
          default:
            (c(),
              t(
                `NSData *postData = [[NSData alloc] initWithData:[@"${n.text}" dataUsingEncoding:NSUTF8StringEncoding]];`
              ));
        }
      return (
        c(),
        t(
          `NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:@"${s}"]`
        ),
        t(
          '                                                       cachePolicy:NSURLRequestUseProtocolCachePolicy'
        ),
        t(
          `                                                   timeoutInterval:${i.timeout.toFixed(1)}];`
        ),
        t(`[request setHTTPMethod:@"${o}"];`),
        d.hasHeaders && t('[request setAllHTTPHeaderFields:headers];'),
        d.hasBody && t('[request setHTTPBody:postData];'),
        c(),
        t('NSURLSession *session = [NSURLSession sharedSession];'),
        t(
          'NSURLSessionDataTask *dataTask = [session dataTaskWithRequest:request'
        ),
        t(
          '                                            completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {'
        ),
        t('                                            if (error) {', 1),
        t(
          '                                            NSLog(@"%@", error);',
          2
        ),
        t('                                            } else {', 1),
        t(
          '                                            NSHTTPURLResponse *httpResponse = (NSHTTPURLResponse *) response;',
          2
        ),
        t(
          '                                            NSLog(@"%@", httpResponse);',
          2
        ),
        t('                                            }', 1),
        t('                                            }];'),
        t('[dataTask resume];'),
        r()
      );
    },
  },
  pt = {
    info: {
      key: 'objc',
      title: 'Objective-C',
      extname: '.m',
      default: 'nsurlsession',
    },
    clientsById: { nsurlsession: ft },
  },
  ht = {
    info: {
      key: 'cohttp',
      title: 'CoHTTP',
      link: 'https://github.com/mirage/ocaml-cohttp',
      description:
        'Cohttp is a very lightweight HTTP server using Lwt or Async for OCaml',
    },
    convert: ({ fullUrl: e, allHeaders: n, postData: o, method: s }, a) => {
      const l = { indent: '  ', ...a },
        i = ['get', 'post', 'head', 'delete', 'patch', 'put', 'options'],
        { push: t, blank: r, join: c } = new w({ indent: l.indent });
      (t('open Cohttp_lwt_unix'),
        t('open Cohttp'),
        t('open Lwt'),
        r(),
        t(`let uri = Uri.of_string "${e}" in`));
      const d = Object.keys(n);
      (d.length === 1
        ? t(
            `let headers = Header.add (Header.init ()) "${d[0]}" "${O(n[d[0]])}" in`
          )
        : d.length > 1 &&
          (t('let headers = Header.add_list (Header.init ()) ['),
          d.forEach((f) => {
            t(`("${f}", "${O(n[f])}");`, 1);
          }),
          t('] in')),
        o?.text &&
          t(
            `let body = Cohttp_lwt_body.of_string ${JSON.stringify(o.text)} in`
          ),
        r());
      const p = d.length ? '~headers ' : '',
        u = o?.text ? '~body ' : '',
        h = i.includes(s.toLowerCase())
          ? `\`${s.toUpperCase()}`
          : `(Code.method_of_string "${s}")`;
      return (
        t(`Client.call ${p}${u}${h} uri`),
        t('>>= fun (res, body_stream) ->'),
        t('(* Do stuff with the result *)', 1),
        c()
      );
    },
  },
  yt = {
    info: { key: 'ocaml', title: 'OCaml', extname: '.ml', default: 'cohttp' },
    clientsById: { cohttp: ht },
  },
  j = (e, n, o) => {
    switch (((o = o || ''), (n = n || ''), Object.prototype.toString.call(e))) {
      case '[object Null]':
        return 'null';
      case '[object Undefined]':
        return 'null';
      case '[object String]':
        return `'${L(e, { delimiter: "'", escapeNewlines: !1 })}'`;
      case '[object Number]':
        return e.toString();
      case '[object Array]': {
        const s = e.map((a) => j(a, `${n}${n}`, n)).join(`,
${n}`);
        return `[
${n}${s}
${o}]`;
      }
      case '[object Object]': {
        const s = [];
        for (const a in e)
          Object.prototype.hasOwnProperty.call(e, a) &&
            s.push(`${j(a, n)} => ${j(e[a], `${n}${n}`, n)}`);
        return `[
${n}${s.join(`,
${n}`)}
${o}]`;
      }
      default:
        return 'null';
    }
  },
  ae = [
    'ACL',
    'BASELINE_CONTROL',
    'CHECKIN',
    'CHECKOUT',
    'CONNECT',
    'COPY',
    'DELETE',
    'GET',
    'HEAD',
    'LABEL',
    'LOCK',
    'MERGE',
    'MKACTIVITY',
    'MKCOL',
    'MKWORKSPACE',
    'MOVE',
    'OPTIONS',
    'POST',
    'PROPFIND',
    'PROPPATCH',
    'PUT',
    'REPORT',
    'TRACE',
    'UNCHECKOUT',
    'UNLOCK',
    'UPDATE',
    'VERSION_CONTROL',
  ],
  mt = {
    info: {
      key: 'curl',
      title: 'cURL',
      link: 'http://php.net/manual/en/book.curl.php',
      description: 'PHP with ext-curl',
    },
    convert: (
      {
        uriObj: e,
        postData: n,
        fullUrl: o,
        method: s,
        httpVersion: a,
        cookies: l,
        headersObj: i,
      },
      t = {}
    ) => {
      const {
          closingTag: r = !1,
          indent: c = '  ',
          maxRedirects: d = 10,
          namedErrors: p = !1,
          noTags: u = !1,
          shortTags: h = !1,
          timeout: f = 30,
        } = t,
        { push: y, blank: m, join: b } = new w({ indent: c });
      (u || (y(h ? '<?' : '<?php'), m()), y('$curl = curl_init();'), m());
      const g = [
        {
          escape: !0,
          name: 'CURLOPT_PORT',
          value: e.port === '' ? null : e.port,
        },
        { escape: !0, name: 'CURLOPT_URL', value: o },
        { escape: !1, name: 'CURLOPT_RETURNTRANSFER', value: 'true' },
        { escape: !0, name: 'CURLOPT_ENCODING', value: '' },
        { escape: !1, name: 'CURLOPT_MAXREDIRS', value: d },
        { escape: !1, name: 'CURLOPT_TIMEOUT', value: f },
        {
          escape: !1,
          name: 'CURLOPT_HTTP_VERSION',
          value:
            a === 'HTTP/1.0'
              ? 'CURL_HTTP_VERSION_1_0'
              : 'CURL_HTTP_VERSION_1_1',
        },
        { escape: !0, name: 'CURLOPT_CUSTOMREQUEST', value: s },
        {
          escape: !n?.jsonObj,
          name: 'CURLOPT_POSTFIELDS',
          value: n
            ? n.jsonObj
              ? `json_encode(${j(n.jsonObj, c.repeat(2), c)})`
              : n.text
            : void 0,
        },
      ];
      y('curl_setopt_array($curl, [');
      const $ = new w({
        indent: c,
        join: `
${c}`,
      });
      g.forEach(({ value: k, name: E, escape: H }) => {
        k != null && $.push(`${E} => ${H ? JSON.stringify(k) : k},`);
      });
      const T = l.map(
        (k) => `${encodeURIComponent(k.name)}=${encodeURIComponent(k.value)}`
      );
      T.length && $.push(`CURLOPT_COOKIE => "${T.join('; ')}",`);
      const S = Object.keys(i)
        .sort()
        .map((k) => `"${k}: ${O(i[k])}"`);
      return (
        S.length &&
          ($.push('CURLOPT_HTTPHEADER => ['),
          $.push(
            S.join(`,
${c}${c}`),
            1
          ),
          $.push('],')),
        y($.join(), 1),
        y(']);'),
        m(),
        y('$response = curl_exec($curl);'),
        y('$err = curl_error($curl);'),
        m(),
        y('curl_close($curl);'),
        m(),
        y('if ($err) {'),
        y(
          p
            ? 'echo array_flip(get_defined_constants(true)["curl"])[$err];'
            : 'echo "cURL Error #:" . $err;',
          1
        ),
        y('} else {'),
        y('echo $response;', 1),
        y('}'),
        !u && r && (m(), y('?>')),
        b()
      );
    },
  },
  $t = {
    info: {
      key: 'guzzle',
      title: 'Guzzle',
      link: 'http://docs.guzzlephp.org/en/stable/',
      description: 'PHP with Guzzle',
    },
    convert: (
      { postData: e, fullUrl: n, method: o, cookies: s, headersObj: a },
      l
    ) => {
      var i;
      const t = {
          closingTag: !1,
          indent: '  ',
          noTags: !1,
          shortTags: !1,
          ...l,
        },
        { push: r, blank: c, join: d } = new w({ indent: t.indent }),
        { code: p, push: u, join: h } = new w({ indent: t.indent });
      switch (
        (t.noTags || (r(t.shortTags ? '<?' : '<?php'), c()), e?.mimeType)
      ) {
        case 'application/x-www-form-urlencoded':
          u(
            `'form_params' => ${j(e.paramsObj, t.indent + t.indent, t.indent)},`,
            1
          );
          break;
        case 'multipart/form-data': {
          const m = [];
          if (
            (e.params &&
              e.params.forEach(function (b) {
                if (b.fileName) {
                  const g = {
                    name: b.name,
                    filename: b.fileName,
                    contents: b.value,
                  };
                  (b.contentType &&
                    (g.headers = { 'Content-Type': b.contentType }),
                    m.push(g));
                } else b.value && m.push({ name: b.name, contents: b.value });
              }),
            m.length &&
              (u(`'multipart' => ${j(m, t.indent + t.indent, t.indent)}`, 1),
              B(a, 'content-type') &&
                !((i = x(a, 'content-type')) === null || i === void 0) &&
                i.indexOf('boundary')))
          ) {
            const b = P(a, 'content-type');
            b && delete a[b];
          }
          break;
        }
        default:
          e?.text && u(`'body' => ${j(e.text)},`, 1);
      }
      const f = Object.keys(a)
          .sort()
          .map(function (m) {
            return `${t.indent}${t.indent}'${m}' => '${_(a[m])}',`;
          }),
        y = s
          .map(
            (m) =>
              `${encodeURIComponent(m.name)}=${encodeURIComponent(m.value)}`
          )
          .join('; ');
      return (
        y.length && f.push(`${t.indent}${t.indent}'cookie' => '${_(y)}',`),
        f.length &&
          (u("'headers' => [", 1),
          u(
            f.join(`
`)
          ),
          u('],', 1)),
        r('$client = new \\GuzzleHttp\\Client();'),
        c(),
        p.length
          ? (r(`$response = $client->request('${o}', '${n}', [`),
            r(h()),
            r(']);'))
          : r(`$response = $client->request('${o}', '${n}');`),
        c(),
        r('echo $response->getBody();'),
        !t.noTags && t.closingTag && (c(), r('?>')),
        d()
      );
    },
  },
  bt = {
    info: {
      key: 'http1',
      title: 'HTTP v1',
      link: 'http://php.net/manual/en/book.http.php',
      description: 'PHP with pecl/http v1',
    },
    convert: (
      {
        method: e,
        url: n,
        postData: o,
        queryObj: s,
        headersObj: a,
        cookiesObj: l,
      },
      i = {}
    ) => {
      const {
          closingTag: t = !1,
          indent: r = '  ',
          noTags: c = !1,
          shortTags: d = !1,
        } = i,
        { push: p, blank: u, join: h } = new w({ indent: r });
      switch (
        (c || (p(d ? '<?' : '<?php'), u()),
        ae.includes(e.toUpperCase()) ||
          p(`HttpRequest::methodRegister('${e}');`),
        p('$request = new HttpRequest();'),
        p(`$request->setUrl(${j(n)});`),
        ae.includes(e.toUpperCase())
          ? p(`$request->setMethod(HTTP_METH_${e.toUpperCase()});`)
          : p(
              `$request->setMethod(HttpRequest::HTTP_METH_${e.toUpperCase()});`
            ),
        u(),
        Object.keys(s).length &&
          (p(`$request->setQueryData(${j(s, r)});`), u()),
        Object.keys(a).length && (p(`$request->setHeaders(${j(a, r)});`), u()),
        Object.keys(l).length && (p(`$request->setCookies(${j(l, r)});`), u()),
        o?.mimeType)
      ) {
        case 'application/x-www-form-urlencoded':
          (p(`$request->setContentType(${j(o.mimeType)});`),
            p(`$request->setPostFields(${j(o.paramsObj, r)});`),
            u());
          break;
        case 'application/json':
          (p(`$request->setContentType(${j(o.mimeType)});`),
            p(`$request->setBody(json_encode(${j(o.jsonObj, r)}));`),
            u());
          break;
        default:
          o?.text && (p(`$request->setBody(${j(o.text)});`), u());
      }
      return (
        p('try {'),
        p('$response = $request->send();', 1),
        u(),
        p('echo $response->getBody();', 1),
        p('} catch (HttpException $ex) {'),
        p('echo $ex;', 1),
        p('}'),
        !c && t && (u(), p('?>')),
        h()
      );
    },
  },
  gt = {
    info: {
      key: 'http2',
      title: 'HTTP v2',
      link: 'http://devel-m6w6.rhcloud.com/mdref/http',
      description: 'PHP with pecl/http v2',
    },
    convert: (
      {
        postData: e,
        headersObj: n,
        method: o,
        queryObj: s,
        cookiesObj: a,
        url: l,
      },
      i = {}
    ) => {
      var t;
      const {
          closingTag: r = !1,
          indent: c = '  ',
          noTags: d = !1,
          shortTags: p = !1,
        } = i,
        { push: u, blank: h, join: f } = new w({ indent: c });
      let y = !1;
      switch (
        (d || (u(p ? '<?' : '<?php'), h()),
        u('$client = new http\\Client;'),
        u('$request = new http\\Client\\Request;'),
        h(),
        e?.mimeType)
      ) {
        case 'application/x-www-form-urlencoded':
          (u('$body = new http\\Message\\Body;'),
            u(`$body->append(new http\\QueryString(${j(e.paramsObj, c)}));`),
            h(),
            (y = !0));
          break;
        case 'multipart/form-data': {
          if (!e.params) break;
          const m = [],
            b = {};
          e.params.forEach(
            ({ name: T, fileName: S, value: k, contentType: E }) => {
              if (S) {
                m.push({ name: T, type: E, file: S, data: k });
                return;
              }
              k && (b[T] = k);
            }
          );
          const g = Object.keys(b).length ? j(b, c) : 'null',
            $ = m.length ? j(m, c) : 'null';
          if (
            (u('$body = new http\\Message\\Body;'),
            u(`$body->addForm(${g}, ${$});`),
            B(n, 'content-type') &&
              !((t = x(n, 'content-type')) === null || t === void 0) &&
              t.indexOf('boundary'))
          ) {
            const T = P(n, 'content-type');
            T && delete n[T];
          }
          (h(), (y = !0));
          break;
        }
        case 'application/json':
          (u('$body = new http\\Message\\Body;'),
            u(`$body->append(json_encode(${j(e.jsonObj, c)}));`),
            (y = !0));
          break;
        default:
          e?.text &&
            (u('$body = new http\\Message\\Body;'),
            u(`$body->append(${j(e.text)});`),
            h(),
            (y = !0));
      }
      return (
        u(`$request->setRequestUrl(${j(l)});`),
        u(`$request->setRequestMethod(${j(o)});`),
        y && (u('$request->setBody($body);'), h()),
        Object.keys(s).length &&
          (u(`$request->setQuery(new http\\QueryString(${j(s, c)}));`), h()),
        Object.keys(n).length && (u(`$request->setHeaders(${j(n, c)});`), h()),
        Object.keys(a).length &&
          (h(), u(`$client->setCookies(${j(a, c)});`), h()),
        u('$client->enqueue($request)->send();'),
        u('$response = $client->getResponse();'),
        h(),
        u('echo $response->getBody();'),
        !d && r && (h(), u('?>')),
        f()
      );
    },
  },
  wt = {
    info: { key: 'php', title: 'PHP', extname: '.php', default: 'curl' },
    clientsById: { curl: mt, guzzle: $t, http1: bt, http2: gt },
  },
  he =
    (e) =>
    ({
      method: o,
      headersObj: s,
      cookies: a,
      uriObj: l,
      fullUrl: i,
      postData: t,
      allHeaders: r,
    }) => {
      const { push: c, join: d } = new w();
      if (
        !['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'].includes(
          o.toUpperCase()
        )
      )
        return 'Method not supported';
      const u = [],
        h = Object.keys(s);
      return (
        h.length &&
          (c('$headers=@{}'),
          h.forEach((f) => {
            f !== 'connection' &&
              c(`$headers.Add("${f}", "${L(s[f], { escapeChar: '`' })}")`);
          }),
          u.push('-Headers $headers')),
        a.length &&
          (c(
            '$session = New-Object Microsoft.PowerShell.Commands.WebRequestSession'
          ),
          a.forEach((f) => {
            (c('$cookie = New-Object System.Net.Cookie'),
              c(`$cookie.Name = '${f.name}'`),
              c(`$cookie.Value = '${f.value}'`),
              c(`$cookie.Domain = '${l.host}'`),
              c('$session.Cookies.Add($cookie)'));
          }),
          u.push('-WebSession $session')),
        t?.text &&
          (u.push(
            `-ContentType '${L(x(r, 'content-type'), { delimiter: "'", escapeChar: '`' })}'`
          ),
          u.push(`-Body '${t.text}'`)),
        c(`$response = ${e} -Uri '${i}' -Method ${o} ${u.join(' ')}`),
        d()
      );
    },
  Tt = {
    info: {
      key: 'restmethod',
      title: 'Invoke-RestMethod',
      link: 'https://docs.microsoft.com/en-us/powershell/module/Microsoft.PowerShell.Utility/Invoke-RestMethod',
      description: 'Powershell Invoke-RestMethod client',
    },
    convert: he('Invoke-RestMethod'),
  },
  jt = {
    info: {
      key: 'webrequest',
      title: 'Invoke-WebRequest',
      link: 'https://docs.microsoft.com/en-us/powershell/module/Microsoft.PowerShell.Utility/Invoke-WebRequest',
      description: 'Powershell Invoke-WebRequest client',
    },
    convert: he('Invoke-WebRequest'),
  },
  kt = {
    info: {
      key: 'powershell',
      title: 'Powershell',
      extname: '.ps1',
      default: 'webrequest',
    },
    clientsById: { webrequest: jt, restmethod: Tt },
  },
  Ot = {
    info: {
      key: 'python3',
      title: 'http.client',
      link: 'https://docs.python.org/3/library/http.client.html',
      description: 'Python3 HTTP Client',
    },
    convert: (
      {
        uriObj: { path: e, protocol: n, host: o },
        postData: s,
        allHeaders: a,
        method: l,
      },
      i = {}
    ) => {
      const { insecureSkipVerify: t = !1 } = i,
        { push: r, blank: c, join: d } = new w();
      (r('import http.client'),
        t && r('import ssl'),
        c(),
        n === 'https:'
          ? (r(
              `conn = http.client.HTTPSConnection("${o}"${t ? ', context = ssl._create_unverified_context()' : ''})`
            ),
            c())
          : (r(`conn = http.client.HTTPConnection("${o}")`), c()));
      const p = JSON.stringify(s?.text);
      p && (r(`payload = ${p}`), c());
      const u = a,
        h = Object.keys(u).length;
      if (h === 1)
        for (const f in u) (r(`headers = { '${f}': "${O(u[f])}" }`), c());
      else if (h > 1) {
        let f = 1;
        r('headers = {');
        for (const y in u)
          f++ !== h
            ? r(`    '${y}': "${O(u[y])}",`)
            : r(`    '${y}': "${O(u[y])}"`);
        (r('}'), c());
      }
      return (
        r(
          p && h
            ? `conn.request("${l}", "${e}", payload, headers)`
            : p && !h
              ? `conn.request("${l}", "${e}", payload)`
              : !p && h
                ? `conn.request("${l}", "${e}", headers=headers)`
                : `conn.request("${l}", "${e}")`
        ),
        c(),
        r('res = conn.getresponse()'),
        r('data = res.read()'),
        c(),
        r('print(data.decode("utf-8"))'),
        d()
      );
    },
  };
function le(e, n, o, s, a) {
  const l = s.repeat(a),
    i = s.repeat(a - 1),
    t = o
      ? `,
${l}`
      : ', ',
    r = e === 'object' ? '{' : '[',
    c = e === 'object' ? '}' : ']';
  return o
    ? `${r}
${l}${n.join(t)}
${i}${c}`
    : e === 'object' && n.length > 0
      ? `${r} ${n.join(t)} ${c}`
      : `${r}${n.join(t)}${c}`;
}
const N = (e, n, o) => {
    switch (
      ((o = o === void 0 ? 1 : o + 1), Object.prototype.toString.call(e))
    ) {
      case '[object Number]':
        return e;
      case '[object Array]': {
        let s = !1;
        const a = e.map(
          (l) => (
            Object.prototype.toString.call(l) === '[object Object]' &&
              (s = Object.keys(l).length > 1),
            N(l, n, o)
          )
        );
        return le('array', a, s, n.indent, o);
      }
      case '[object Object]': {
        const s = [];
        for (const a in e) s.push(`"${a}": ${N(e[a], n, o)}`);
        return le('object', s, n.pretty && s.length > 1, n.indent, o);
      }
      case '[object Null]':
        return 'None';
      case '[object Boolean]':
        return e ? 'True' : 'False';
      default:
        return e == null ? '' : `"${e.toString().replace(/"/g, '\\"')}"`;
    }
  },
  St = ['HEAD', 'GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  vt = {
    info: {
      key: 'requests',
      title: 'Requests',
      link: 'http://docs.python-requests.org/en/latest/api/#requests.request',
      description: 'Requests HTTP library',
    },
    convert: (
      { queryObj: e, url: n, postData: o, allHeaders: s, method: a },
      l
    ) => {
      const i = { indent: '    ', pretty: !0, ...l },
        { push: t, blank: r, join: c } = new w({ indent: i.indent });
      (t('import requests'), r(), t(`url = "${n}"`), r());
      let d;
      Object.keys(e).length &&
        ((d = `querystring = ${JSON.stringify(e)}`), t(d), r());
      const p = s;
      let u = {};
      const h = {};
      let f = !1,
        y = !1,
        m = !1;
      switch (o?.mimeType) {
        case 'application/json':
          o.jsonObj && (t(`payload = ${N(o.jsonObj, i)}`), (m = !0), (y = !0));
          break;
        case 'multipart/form-data':
          if (!o.params) break;
          if (
            ((u = {}),
            o.params.forEach(($) => {
              $.fileName
                ? ((h[$.name] = `open('${$.fileName}', 'rb')`), (f = !0))
                : ((u[$.name] = $.value), (y = !0));
            }),
            f)
          ) {
            (t(`files = ${N(h, i)}`), y && t(`payload = ${N(u, i)}`));
            const $ = P(p, 'content-type');
            $ && delete p[$];
          } else {
            const $ = JSON.stringify(o.text);
            $ && (t(`payload = ${$}`), (y = !0));
          }
          break;
        default: {
          if (!o) break;
          if (
            o.mimeType === 'application/x-www-form-urlencoded' &&
            o.paramsObj
          ) {
            (t(`payload = ${N(o.paramsObj, i)}`), (y = !0));
            break;
          }
          const $ = JSON.stringify(o.text);
          $ && (t(`payload = ${$}`), (y = !0));
        }
      }
      const b = Object.keys(p).length;
      if (b === 0 && (y || f)) r();
      else if (b === 1)
        for (const $ in p) (t(`headers = {"${$}": "${O(p[$])}"}`), r());
      else if (b > 1) {
        let $ = 1;
        t('headers = {');
        for (const T in p)
          (t($ !== b ? `"${T}": "${O(p[T])}",` : `"${T}": "${O(p[T])}"`, 1),
            ($ += 1));
        (t('}'), r());
      }
      let g = St.includes(a)
        ? `response = requests.${a.toLowerCase()}(url`
        : `response = requests.request("${a}", url`;
      return (
        y && (m ? (g += ', json=payload') : (g += ', data=payload')),
        f && (g += ', files=files'),
        b > 0 && (g += ', headers=headers'),
        d && (g += ', params=querystring'),
        (g += ')'),
        t(g),
        r(),
        t('print(response.json())'),
        c()
      );
    },
  },
  Ct = {
    info: {
      key: 'python',
      title: 'Python',
      extname: '.py',
      default: 'python3',
    },
    clientsById: { python3: Ot, requests: vt },
  },
  Pt = {
    info: {
      key: 'httr',
      title: 'httr',
      link: 'https://cran.r-project.org/web/packages/httr/vignettes/quickstart.html',
      description: 'httr: Tools for Working with URLs and HTTP',
    },
    convert: (
      {
        url: e,
        queryObj: n,
        queryString: o,
        postData: s,
        allHeaders: a,
        method: l,
      },
      i = {}
    ) => {
      var t, r;
      const {
        push: c,
        blank: d,
        join: p,
      } = new w({ indent: (t = i.indent) !== null && t !== void 0 ? t : '  ' });
      (c('library(httr)'), d(), c(`url <- "${e}"`), d());
      const u = n;
      delete n.key;
      const h = Object.entries(u),
        f = h.length;
      if (f === 1) {
        const q = h[0];
        (c(`queryString <- list(${q[0]} = "${q[1]}")`), d());
      } else
        f > 1 &&
          (c('queryString <- list('),
          h.forEach(([q, F], me) => {
            const $e = me !== f - 1 ? ',' : '';
            c(`${q} = "${F}"${$e}`, 1);
          }),
          c(')'),
          d());
      const y = JSON.stringify(s?.text);
      if (
        (y && (c(`payload <- ${y}`), d()),
        s && (s.text || s.jsonObj || s.params))
      )
        switch (s.mimeType) {
          case 'application/x-www-form-urlencoded':
            (c('encode <- "form"'), d());
            break;
          case 'application/json':
            (c('encode <- "json"'), d());
            break;
          case 'multipart/form-data':
            (c('encode <- "multipart"'), d());
            break;
          default:
            (c('encode <- "raw"'), d());
            break;
        }
      const m = x(a, 'cookie'),
        b = x(a, 'accept'),
        g = m
          ? `set_cookies(\`${String(m).replace(/;/g, '", `').replace(/` /g, '`').replace(/[=]/g, '` = "')}")`
          : void 0,
        $ = b ? `accept("${O(b)}")` : void 0,
        T = `content_type("${O((r = s?.mimeType) !== null && r !== void 0 ? r : 'application/octet-stream')}")`,
        S = Object.entries(a)
          .filter(
            ([q]) =>
              !['cookie', 'accept', 'content-type'].includes(q.toLowerCase())
          )
          .map(([q, F]) => `'${q}' = '${_(F)}'`)
          .join(', '),
        k = S ? `add_headers(${S})` : void 0;
      let E = `response <- VERB("${l}", url`;
      (y && (E += ', body = payload'),
        o.length && (E += ', query = queryString'));
      const H = [k, T, $, g].filter((q) => !!q).join(', ');
      return (
        H && (E += `, ${H}`),
        s && (s.text || s.jsonObj || s.params) && (E += ', encode = encode'),
        (E += ')'),
        c(E),
        d(),
        c('content(response, "text")'),
        p()
      );
    },
  },
  Et = {
    info: { key: 'r', title: 'R', extname: '.r', default: 'httr' },
    clientsById: { httr: Pt },
  },
  Rt = {
    info: {
      key: 'native',
      title: 'net::http',
      link: 'http://ruby-doc.org/stdlib-2.2.1/libdoc/net/http/rdoc/Net/HTTP.html',
      description: 'Ruby HTTP client',
    },
    convert: (
      { uriObj: e, method: n, fullUrl: o, postData: s, allHeaders: a },
      l = {}
    ) => {
      const { insecureSkipVerify: i = !1 } = l,
        { push: t, blank: r, join: c } = new w();
      (t("require 'uri'"), t("require 'net/http'"), r());
      const d = n.toUpperCase(),
        p = [
          'GET',
          'POST',
          'HEAD',
          'DELETE',
          'PATCH',
          'PUT',
          'OPTIONS',
          'COPY',
          'LOCK',
          'UNLOCK',
          'MOVE',
          'TRACE',
        ],
        u = d.charAt(0) + d.substring(1).toLowerCase();
      (p.includes(d) ||
        (t(`class Net::HTTP::${u} < Net::HTTPRequest`),
        t(`  METHOD = '${d.toUpperCase()}'`),
        t(`  REQUEST_HAS_BODY = '${s?.text ? 'true' : 'false'}'`),
        t('  RESPONSE_HAS_BODY = true'),
        t('end'),
        r()),
        t(`url = URI("${o}")`),
        r(),
        t('http = Net::HTTP.new(url.host, url.port)'),
        e.protocol === 'https:' &&
          (t('http.use_ssl = true'),
          i && t('http.verify_mode = OpenSSL::SSL::VERIFY_NONE')),
        r(),
        t(`request = Net::HTTP::${u}.new(url)`));
      const h = Object.keys(a);
      return (
        h.length &&
          h.forEach((f) => {
            t(`request["${f}"] = '${_(a[f])}'`);
          }),
        s?.text && t(`request.body = ${JSON.stringify(s.text)}`),
        r(),
        t('response = http.request(request)'),
        t('puts response.read_body'),
        c()
      );
    },
  },
  xt = {
    info: { key: 'ruby', title: 'Ruby', extname: '.rb', default: 'native' },
    clientsById: { native: Rt },
  },
  v = (e = '') =>
    /^[a-z0-9-_/.@%^=:]+$/i.test(e) ? e : `'${e.replace(/'/g, "'\\''")}'`,
  qt = (e) => e.replace(/\r/g, '\\r').replace(/\n/g, '\\n'),
  Nt = {
    'http1.0': '0',
    'url ': '',
    cookie: 'b',
    data: 'd',
    form: 'F',
    globoff: 'g',
    header: 'H',
    insecure: 'k',
    request: 'X',
  },
  Ut = (e) => (n) => {
    if (e) {
      const o = Nt[n];
      return o ? `-${o}` : '';
    }
    return `--${n}`;
  },
  Lt = {
    info: {
      key: 'curl',
      title: 'cURL',
      link: 'http://curl.haxx.se/',
      description:
        'cURL is a command line tool and library for transferring data with URL syntax',
    },
    convert: (
      {
        fullUrl: e,
        method: n,
        httpVersion: o,
        headersObj: s,
        allHeaders: a,
        postData: l,
      },
      i = {}
    ) => {
      var t;
      const {
          binary: r = !1,
          globOff: c = !1,
          indent: d = '  ',
          insecureSkipVerify: p = !1,
          prettifyJson: u = !1,
          short: h = !1,
        } = i,
        { push: f, join: y } = new w({
          ...(typeof d == 'string' ? { indent: d } : {}),
          join:
            d !== !1
              ? ` \\
${d}`
              : ' ',
        }),
        m = Ut(h);
      let b = v(e);
      if (
        (f(`curl ${m('request')} ${n}`),
        c && ((b = unescape(b)), f(m('globoff'))),
        f(`${m('url ')}${b}`),
        p && f(m('insecure')),
        o === 'HTTP/1.0' && f(m('http1.0')),
        x(a, 'accept-encoding') && f('--compressed'),
        l?.mimeType === 'multipart/form-data')
      ) {
        const g = P(s, 'content-type');
        if (g) {
          const $ = s[g];
          if (g && $) {
            const T = $.replace(/; boundary.+?(?=(;|$))/, '');
            ((s[g] = T), (a[g] = T));
          }
        }
      }
      switch (
        (Object.keys(s)
          .sort()
          .forEach((g) => {
            const $ = `${g}: ${s[g]}`;
            f(`${m('header')} ${v($)}`);
          }),
        a.cookie && f(`${m('cookie')} ${v(a.cookie)}`),
        l?.mimeType)
      ) {
        case 'multipart/form-data':
          (t = l.params) === null ||
            t === void 0 ||
            t.forEach((g) => {
              let $ = '';
              (g.fileName
                ? ($ = `${g.name}=@${g.fileName}`)
                : ($ = `${g.name}=${g.value}`),
                f(`${m('form')} ${v($)}`));
            });
          break;
        case 'application/x-www-form-urlencoded':
          l.params
            ? l.params.forEach((g) => {
                const $ = g.name,
                  T = encodeURIComponent(g.name),
                  S = T !== $;
                f(
                  `${r ? '--data-binary' : `--data${S ? '-urlencode' : ''}`} ${v(`${S ? T : $}=${g.value}`)}`
                );
              })
            : f(`${r ? '--data-binary' : m('data')} ${v(l.text)}`);
          break;
        default: {
          if (!l || !l.text) break;
          const g = r ? '--data-binary' : m('data');
          let $ = !1;
          if (Pe(l.mimeType) && l.text.length > 2 && u)
            try {
              const S = JSON.parse(l.text);
              $ = !0;
              const k = JSON.stringify(S, void 0, d);
              l.text.indexOf("'") > 0
                ? f(`${g} @- <<EOF
${k}
EOF`)
                : f(`${g} '
${k}
'`);
            } catch {}
          $ || f(`${g} ${v(l.text)}`);
        }
      }
      return y();
    },
  },
  _t = {
    info: {
      key: 'httpie',
      title: 'HTTPie',
      link: 'http://httpie.org/',
      description: 'a CLI, cURL-like tool for humans',
    },
    convert: (
      {
        allHeaders: e,
        postData: n,
        queryObj: o,
        fullUrl: s,
        method: a,
        url: l,
      },
      i
    ) => {
      const t = {
          body: !1,
          cert: !1,
          headers: !1,
          indent: '  ',
          pretty: !1,
          print: !1,
          queryParams: !1,
          short: !1,
          style: !1,
          timeout: !1,
          verbose: !1,
          verify: !1,
          ...i,
        },
        {
          push: r,
          join: c,
          unshift: d,
        } = new w({
          indent: t.indent,
          join:
            t.indent !== !1
              ? ` \\
${t.indent}`
              : ' ',
        });
      let p = !1;
      const u = [];
      (t.headers && u.push(t.short ? '-h' : '--headers'),
        t.body && u.push(t.short ? '-b' : '--body'),
        t.verbose && u.push(t.short ? '-v' : '--verbose'),
        t.print && u.push(`${t.short ? '-p' : '--print'}=${t.print}`),
        t.verify && u.push(`--verify=${t.verify}`),
        t.cert && u.push(`--cert=${t.cert}`),
        t.pretty && u.push(`--pretty=${t.pretty}`),
        t.style && u.push(`--style=${t.style}`),
        t.timeout && u.push(`--timeout=${t.timeout}`),
        t.queryParams &&
          Object.keys(o).forEach((f) => {
            const y = o[f];
            Array.isArray(y)
              ? y.forEach((m) => {
                  r(`${f}==${v(m)}`);
                })
              : r(`${f}==${v(y)}`);
          }),
        Object.keys(e)
          .sort()
          .forEach((f) => {
            r(`${f}:${v(e[f])}`);
          }),
        n?.mimeType === 'application/x-www-form-urlencoded'
          ? n.params &&
            n.params.length &&
            (u.push(t.short ? '-f' : '--form'),
            n.params.forEach((f) => {
              r(`${f.name}=${v(f.value)}`);
            }))
          : (p = !0));
      const h = u.length ? `${u.join(' ')} ` : '';
      if (
        ((l = v(t.queryParams ? l : s)), d(`http ${h}${a} ${l}`), p && n?.text)
      ) {
        const f = v(n.text);
        d(`echo ${f} | `);
      }
      return c();
    },
  },
  Ht = {
    info: {
      key: 'wget',
      title: 'Wget',
      link: 'https://www.gnu.org/software/wget/',
      description:
        'a free software package for retrieving files using HTTP, HTTPS',
    },
    convert: ({ method: e, postData: n, allHeaders: o, fullUrl: s }, a) => {
      const l = { indent: '  ', short: !1, verbose: !1, ...a },
        { push: i, join: t } = new w({
          indent: l.indent,
          join:
            l.indent !== !1
              ? ` \\
${l.indent}`
              : ' ',
        });
      return (
        l.verbose
          ? i(`wget ${l.short ? '-v' : '--verbose'}`)
          : i(`wget ${l.short ? '-q' : '--quiet'}`),
        i(`--method ${v(e)}`),
        Object.keys(o).forEach((r) => {
          const c = `${r}: ${o[r]}`;
          i(`--header ${v(c)}`);
        }),
        n?.text && i(`--body-data ${qt(v(n.text))}`),
        i(l.short ? '-O' : '--output-document'),
        i(`- ${v(s)}`),
        t()
      );
    },
  },
  It = {
    info: { key: 'shell', title: 'Shell', extname: '.sh', default: 'curl' },
    clientsById: { curl: Lt, httpie: _t, wget: Ht },
  },
  de = (e, n) => n.repeat(e),
  ue = (e, n, o, s) => {
    const a = de(s, o),
      l = de(s - 1, o),
      i = n
        ? `,
${a}`
        : ', ';
    return n
      ? `[
${a}${e.join(i)}
${l}]`
      : `[${e.join(i)}]`;
  },
  W = (e, n, o) => `let ${e} = ${Y(n, o)}`,
  Y = (e, n, o) => {
    switch (
      ((o = o === void 0 ? 1 : o + 1), Object.prototype.toString.call(e))
    ) {
      case '[object Number]':
        return e;
      case '[object Array]': {
        let s = !1;
        const a = e.map(
          (l) => (
            Object.prototype.toString.call(l) === '[object Object]' &&
              (s = Object.keys(l).length > 1),
            Y(l, n, o)
          )
        );
        return ue(a, s, n.indent, o);
      }
      case '[object Object]': {
        const s = [];
        for (const a in e) s.push(`"${a}": ${Y(e[a], n, o)}`);
        return ue(s, n.pretty && s.length > 1, n.indent, o);
      }
      case '[object Boolean]':
        return e.toString();
      default:
        return e == null ? '' : `"${e.toString().replace(/"/g, '\\"')}"`;
    }
  },
  At = {
    info: {
      key: 'nsurlsession',
      title: 'NSURLSession',
      link: 'https://developer.apple.com/library/mac/documentation/Foundation/Reference/NSURLSession_class/index.html',
      description: "Foundation's NSURLSession request",
    },
    convert: ({ allHeaders: e, postData: n, fullUrl: o, method: s }, a) => {
      var l;
      const i = { indent: '  ', pretty: !0, timeout: '10', ...a },
        { push: t, blank: r, join: c } = new w({ indent: i.indent }),
        d = { hasHeaders: !1, hasBody: !1 };
      if (
        (t('import Foundation'),
        Object.keys(e).length &&
          ((d.hasHeaders = !0), r(), t(W('headers', e, i))),
        n && (n.text || n.jsonObj || n.params))
      )
        switch (((d.hasBody = !0), n.mimeType)) {
          case 'application/x-www-form-urlencoded':
            if ((r(), !((l = n.params) === null || l === void 0) && l.length)) {
              const [p, ...u] = n.params;
              (t(
                `let postData = NSMutableData(data: "${p.name}=${p.value}".data(using: String.Encoding.utf8)!)`
              ),
                u.forEach(({ name: h, value: f }) => {
                  t(
                    `postData.append("&${h}=${f}".data(using: String.Encoding.utf8)!)`
                  );
                }));
            } else d.hasBody = !1;
            break;
          case 'application/json':
            n.jsonObj &&
              (t(`${W('parameters', n.jsonObj, i)} as [String : Any]`),
              r(),
              t(
                'let postData = JSONSerialization.data(withJSONObject: parameters, options: [])'
              ));
            break;
          case 'multipart/form-data':
            (t(W('parameters', n.params, i)),
              r(),
              t(`let boundary = "${n.boundary}"`),
              r(),
              t('var body = ""'),
              t('var error: NSError? = nil'),
              t('for param in parameters {'),
              t('let paramName = param["name"]!', 1),
              t('body += "--\\(boundary)\\r\\n"', 1),
              t(
                'body += "Content-Disposition:form-data; name=\\"\\(paramName)\\""',
                1
              ),
              t('if let filename = param["fileName"] {', 1),
              t('let contentType = param["content-type"]!', 2),
              t(
                'let fileContent = String(contentsOfFile: filename, encoding: String.Encoding.utf8)',
                2
              ),
              t('if (error != nil) {', 2),
              t('print(error as Any)', 3),
              t('}', 2),
              t('body += "; filename=\\"\\(filename)\\"\\r\\n"', 2),
              t('body += "Content-Type: \\(contentType)\\r\\n\\r\\n"', 2),
              t('body += fileContent', 2),
              t('} else if let paramValue = param["value"] {', 1),
              t('body += "\\r\\n\\r\\n\\(paramValue)"', 2),
              t('}', 1),
              t('}'));
            break;
          default:
            (r(),
              t(
                `let postData = NSData(data: "${n.text}".data(using: String.Encoding.utf8)!)`
              ));
        }
      return (
        r(),
        t(
          `let request = NSMutableURLRequest(url: NSURL(string: "${o}")! as URL,`
        ),
        t(
          '                                        cachePolicy: .useProtocolCachePolicy,'
        ),
        t(
          `                                    timeoutInterval: ${parseInt(i.timeout, 10).toFixed(1)})`
        ),
        t(`request.httpMethod = "${s}"`),
        d.hasHeaders && t('request.allHTTPHeaderFields = headers'),
        d.hasBody && t('request.httpBody = postData as Data'),
        r(),
        t('let session = URLSession.shared'),
        t(
          'let dataTask = session.dataTask(with: request as URLRequest, completionHandler: { (data, response, error) -> Void in'
        ),
        t('if (error != nil) {', 1),
        t('print(error as Any)', 2),
        t('} else {', 1),
        t('let httpResponse = response as? HTTPURLResponse', 2),
        t('print(httpResponse)', 2),
        t('}', 1),
        t('})'),
        r(),
        t('dataTask.resume()'),
        c()
      );
    },
  },
  Bt = {
    info: {
      key: 'swift',
      title: 'Swift',
      extname: '.swift',
      default: 'nsurlsession',
    },
    clientsById: { nsurlsession: At },
  },
  R = {
    c: xe,
    clojure: Ue,
    csharp: Ie,
    go: Be,
    http: Me,
    java: Ge,
    javascript: rt,
    kotlin: it,
    node: ut,
    objc: pt,
    ocaml: yt,
    php: wt,
    powershell: kt,
    python: Ct,
    r: Et,
    ruby: xt,
    shell: It,
    swift: Bt,
  },
  Ft = (e) => {
    if (typeof e != 'object' || e === null || Array.isArray(e)) {
      const n = e === null ? 'null' : Array.isArray(e) ? 'array' : typeof e;
      throw new Error(
        `you tried to add a target which is not an object, got type: "${n}"`
      );
    }
    if (!Object.prototype.hasOwnProperty.call(e, 'info'))
      throw new Error('targets must contain an `info` object');
    if (!Object.prototype.hasOwnProperty.call(e.info, 'key'))
      throw new Error(
        'targets must have an `info` object with the property `key`'
      );
    if (!e.info.key) throw new Error('target key must be a unique string');
    if (Object.prototype.hasOwnProperty.call(R, e.info.key))
      throw new Error(
        `a target already exists with this key, \`${e.info.key}\``
      );
    if (!Object.prototype.hasOwnProperty.call(e.info, 'title'))
      throw new Error(
        'targets must have an `info` object with the property `title`'
      );
    if (!e.info.title)
      throw new Error('target title must be a non-zero-length string');
    if (!Object.prototype.hasOwnProperty.call(e.info, 'extname'))
      throw new Error(
        'targets must have an `info` object with the property `extname`'
      );
    if (
      !Object.prototype.hasOwnProperty.call(e, 'clientsById') ||
      !e.clientsById ||
      Object.keys(e.clientsById).length === 0
    )
      throw new Error(
        `No clients provided in target ${e.info.key}.  You must provide the property \`clientsById\` containg your clients.`
      );
    if (!Object.prototype.hasOwnProperty.call(e.info, 'default'))
      throw new Error(
        'targets must have an `info` object with the property `default`'
      );
    if (!Object.prototype.hasOwnProperty.call(e.clientsById, e.info.default))
      throw new Error(
        `target ${e.info.key} is configured with a default client ${e.info.default}, but no such client was found in the property \`clientsById\` (found ${JSON.stringify(Object.keys(e.clientsById))})`
      );
    return (Object.values(e.clientsById).forEach(ye), !0);
  };
function Kt(e) {
  return Mt().some(({ key: n }) => n === e);
}
const Qt = (e) => {
    (Ft(e), (R[e.info.key] = e));
  },
  ye = (e) => {
    if (!e) throw new Error('clients must be objects');
    if (!Object.prototype.hasOwnProperty.call(e, 'info'))
      throw new Error('targets client must contain an `info` object');
    if (!Object.prototype.hasOwnProperty.call(e.info, 'key'))
      throw new Error(
        'targets client must have an `info` object with property `key`'
      );
    if (!e.info.key)
      throw new Error(
        'client.info.key must contain an identifier unique to this target'
      );
    if (!Object.prototype.hasOwnProperty.call(e.info, 'title'))
      throw new Error(
        'targets client must have an `info` object with property `title`'
      );
    if (!Object.prototype.hasOwnProperty.call(e.info, 'description'))
      throw new Error(
        'targets client must have an `info` object with property `description`'
      );
    if (!Object.prototype.hasOwnProperty.call(e.info, 'link'))
      throw new Error(
        'targets client must have an `info` object with property `link`'
      );
    if (
      !Object.prototype.hasOwnProperty.call(e, 'convert') ||
      typeof e.convert != 'function'
    )
      throw new Error(
        'targets client must have a `convert` property containing a conversion function'
      );
    return !0;
  },
  Yt = (e, n) => {
    if ((ye(n), !Object.prototype.hasOwnProperty.call(R, e)))
      throw new Error(`Sorry, but no ${e} target exists to add clients to`);
    if (Object.prototype.hasOwnProperty.call(R[e], n.info.key))
      throw new Error(
        `the target ${e} already has a client with the key ${n.info.key}, please use a different key`
      );
    R[e].clientsById[n.info.key] = n;
  },
  Mt = () =>
    Object.keys(R).map((e) => ({
      ...R[e].info,
      clients: Object.keys(R[e].clientsById).map(
        (n) => R[e].clientsById[n].info
      ),
    })),
  Xt = (e) => {
    var n;
    return (
      ((n = R[e]) === null || n === void 0 ? void 0 : n.info.extname) || ''
    );
  };
function Jt(e) {
  const n = e.split('/');
  return n[n.length - 1];
}
const Vt = (e) =>
  typeof e == 'object' &&
  'log' in e &&
  typeof e.log == 'object' &&
  'entries' in e.log &&
  Array.isArray(e.log.entries);
class Zt {
  constructor(n) {
    let o = [];
    (Vt(n) ? (o = n.log.entries) : (o = [{ request: n }]),
      (this.requests = Promise.all(
        o.map(({ request: s }) => {
          var a;
          const l = {
            bodySize: 0,
            headersSize: 0,
            headers: [],
            cookies: [],
            httpVersion: 'HTTP/1.1',
            queryString: [],
            postData: {
              mimeType:
                ((a = s.postData) === null || a === void 0
                  ? void 0
                  : a.mimeType) || 'application/octet-stream',
            },
            ...s,
          };
          return this.prepare(l);
        })
      )));
  }
  async prepare(n) {
    var o, s, a, l;
    const i = {
      ...n,
      fullUrl: '',
      queryObj: {},
      headersObj: {},
      cookiesObj: {},
      allHeaders: {},
    };
    if (
      (i.queryString &&
        i.queryString.length &&
        (i.queryObj = i.queryString.reduce(X, {})),
      i.headers && i.headers.length)
    ) {
      const h = /^HTTP\/2/;
      i.headersObj = i.headers.reduce((f, { name: y, value: m }) => {
        const b = h.exec(i.httpVersion) ? y.toLocaleLowerCase() : y;
        return { ...f, [b]: m };
      }, {});
    }
    i.cookies &&
      i.cookies.length &&
      (i.cookiesObj = i.cookies.reduceRight(
        (h, { name: f, value: y }) => ({ ...h, [f]: y }),
        {}
      ));
    const t =
      (o = i.cookies) === null || o === void 0
        ? void 0
        : o.map(
            ({ name: h, value: f }) =>
              `${encodeURIComponent(h)}=${encodeURIComponent(f)}`
          );
    switch (
      (t?.length && (i.allHeaders.cookie = t.join('; ')),
      (s = i.postData) === null || s === void 0 ? void 0 : s.mimeType)
    ) {
      case 'multipart/mixed':
      case 'multipart/related':
      case 'multipart/form-data':
      case 'multipart/alternative':
        if (
          ((i.postData.text = ''),
          (i.postData.mimeType = 'multipart/form-data'),
          !((a = i.postData) === null || a === void 0) && a.params)
        ) {
          const h = new we(),
            f = '---011000010111000001101001';
          (l = i.postData) === null ||
            l === void 0 ||
            l.params.forEach((b) => {
              const g = b.name,
                $ = b.value || '',
                T = b.fileName;
              ke($)
                ? h.append(g, $, T)
                : h.append(g, new Te([$], { type: b.contentType }), T && Jt(T));
            });
          const { postData: y } = i;
          for await (const b of ve(h, f)) y.text += b;
          i.postData.boundary = f;
          const m = P(i.headersObj, 'content-type') || 'content-type';
          i.headersObj[m] = `multipart/form-data; boundary=${f}`;
        }
        break;
      case 'application/x-www-form-urlencoded':
        i.postData.params
          ? ((i.postData.paramsObj = i.postData.params.reduce(X, {})),
            (i.postData.text = Z(i.postData.paramsObj).toString()))
          : (i.postData.text = '');
        break;
      case 'text/json':
      case 'text/x-json':
      case 'application/json':
      case 'application/x-json':
        if (((i.postData.mimeType = 'application/json'), i.postData.text))
          try {
            i.postData.jsonObj = JSON.parse(i.postData.text);
          } catch {
            i.postData.mimeType = 'text/plain';
          }
        break;
    }
    const r = { ...i.allHeaders, ...i.headersObj },
      c = new URL(i.url),
      d = Object.fromEntries(c.searchParams);
    i.queryObj = { ...i.queryObj, ...d };
    const p = Z(i.queryObj),
      u = new URL(i.url);
    return (
      (u.search = p.toString()),
      (c.search = ''),
      {
        ...i,
        allHeaders: r,
        fullUrl: u.toString(),
        url: c.toString(),
        uriObj: new Ee(u.toString()),
      }
    );
  }
  async convert(n, o, s) {
    !s && o && (s = o);
    const a = R[n];
    if (!a) return null;
    const { convert: l } = a.clientsById[o || a.info.default],
      i = (await this.requests).map((t) => l(t, s));
    return i.length === 1 ? i[0] : i;
  }
}
export {
  w as CodeBuilder,
  Zt as HTTPSnippet,
  Qt as addTarget,
  Yt as addTargetClient,
  Mt as availableTargets,
  Xt as extname,
  ye as isClient,
  Ft as isTarget,
  Kt as isValidTargetId,
};
