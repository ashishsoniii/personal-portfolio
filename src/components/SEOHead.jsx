import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const SEOHead = ({ 
  title = "Ashish Soni - Full Stack Developer | GSoC 2023 | ClearFeed | Portfolio",
  description = "Ashish Soni is a Full Stack Developer with experience at ClearFeed, GSoC 2023 participant at The Tor Project, and iOS Developer at GAP INC. Expert in React, Node.js, TypeScript, and building scalable web applications.",
  keywords = "Ashish Soni, Full Stack Developer, React Developer, Node.js Developer, GSoC 2023, ClearFeed, The Tor Project, iOS Developer, GAP INC, TypeScript, MongoDB, Portfolio, Web Developer, Software Engineer",
  image = "https://ashishsoni.dev/og-image.jpg",
  url = "https://ashishsoni.dev",
  type = "website",
  author = "Ashish Soni",
  publishedTime,
  modifiedTime,
  section,
  tags = []
}) => {
  
  // Update document title for better SEO
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Ashish Soni Portfolio" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:creator" content="@ashishsoni" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Article specific meta tags */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {section && <meta property="article:section" content={section} />}
      {tags.length > 0 && tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      
      {/* Structured Data for the current page */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": type === "article" ? "Article" : "WebPage",
          "name": title,
          "description": description,
          "url": url,
          "author": {
            "@type": "Person",
            "name": author
          },
          "publisher": {
            "@type": "Person",
            "name": author
          },
          "mainEntity": type === "article" ? {
            "@type": "Article",
            "headline": title,
            "description": description,
            "author": {
              "@type": "Person",
              "name": author
            },
            "publisher": {
              "@type": "Person",
              "name": author
            },
            "datePublished": publishedTime,
            "dateModified": modifiedTime,
            "image": image
          } : undefined
        })}
      </script>
    </Helmet>
  );
};

SEOHead.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
  type: PropTypes.string,
  author: PropTypes.string,
  publishedTime: PropTypes.string,
  modifiedTime: PropTypes.string,
  section: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string)
};

export default SEOHead; 