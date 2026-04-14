<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sm="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
  exclude-result-prefixes="sm xhtml">

  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/">
    <html lang="en">
      <head>
        <title>Sitemap – ProSaaS</title>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <style>
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #f8fafc; color: #1e293b; }
          header { background: #0f172a; color: #fff; padding: 24px 40px; }
          header h1 { font-size: 1.5rem; font-weight: 700; }
          header p { margin-top: 4px; font-size: 0.875rem; color: #94a3b8; }
          main { padding: 32px 40px; max-width: 1100px; margin: 0 auto; }
          table { width: 100%; border-collapse: collapse; background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,.1); }
          thead tr { background: #1e293b; color: #fff; }
          th { padding: 12px 16px; text-align: left; font-size: 0.8rem; text-transform: uppercase; letter-spacing: .05em; }
          td { padding: 11px 16px; border-bottom: 1px solid #e2e8f0; font-size: 0.875rem; }
          tbody tr:last-child td { border-bottom: none; }
          tbody tr:hover { background: #f1f5f9; }
          a { color: #2563eb; text-decoration: none; }
          a:hover { text-decoration: underline; }
          .badge { display: inline-block; padding: 2px 8px; border-radius: 999px; font-size: 0.75rem; font-weight: 600; }
          .freq-weekly  { background: #dbeafe; color: #1d4ed8; }
          .freq-monthly { background: #dcfce7; color: #15803d; }
          .freq-yearly  { background: #fef9c3; color: #854d0e; }
          .freq-daily   { background: #ede9fe; color: #6d28d9; }
          .count { color: #64748b; font-size: 0.85rem; margin-bottom: 16px; }
        </style>
      </head>
      <body>
        <header>
          <h1>ProSaaS – Sitemap</h1>
          <p>XML Sitemap – all indexed pages</p>
        </header>
        <main>
          <p class="count">
            <xsl:value-of select="count(sm:urlset/sm:url)"/> URLs indexed
          </p>
          <table>
            <thead>
              <tr>
                <th>URL</th>
                <th>Last Modified</th>
                <th>Change Frequency</th>
                <th>Priority</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sm:urlset/sm:url">
                <xsl:sort select="sm:priority" order="descending" data-type="number"/>
                <tr>
                  <td>
                    <a href="{sm:loc}">
                      <xsl:value-of select="sm:loc"/>
                    </a>
                  </td>
                  <td><xsl:value-of select="sm:lastmod"/></td>
                  <td>
                    <span>
                      <xsl:attribute name="class">
                        <xsl:text>badge freq-</xsl:text>
                        <xsl:value-of select="sm:changefreq"/>
                      </xsl:attribute>
                      <xsl:value-of select="sm:changefreq"/>
                    </span>
                  </td>
                  <td><xsl:value-of select="sm:priority"/></td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </main>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
