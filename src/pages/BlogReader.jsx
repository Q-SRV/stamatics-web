import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css"; 
import { GOOGLE_SCRIPT_URL } from "../config";

function BlogReader() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogContent = async () => {
      try {
        const response = await fetch(`${GOOGLE_SCRIPT_URL}?action=get_blogs`);
        const data = await response.json();
        
        // Find the blog with the matching ID from the URL
        // We convert both to string to be safe
        const foundBlog = data.find((b) => String(b.id) === String(id));
        
        if (foundBlog) {
          setBlog(foundBlog);
        } else {
          console.error("Blog not found");
        }
      } catch (error) {
        console.error("Error fetching blog post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogContent();
  }, [id]);

  if (loading) {
    return (
      <div style={styles.container}>
        <div style={{...styles.header, border: "none"}}>Loading article...</div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>404</h1>
        <p>Blog post not found.</p>
        <Link to="/blogs" style={styles.backLink}>← Back to all blogs</Link>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <Link to="/blogs" style={styles.backLink}>← Back to All Articles</Link>
      
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.title}>{blog.title}</h1>
        <p style={styles.meta}>
          {blog.author} • {blog.date ? new Date(blog.date).toLocaleDateString() : ""}
        </p>
      </div>

      {/* The Article Content (Markdown Rendered) */}
      <div className="blog-content" style={styles.content}>
        <ReactMarkdown
          children={blog.content}
          remarkPlugins={[remarkMath]}
          rehypePlugins={[rehypeKatex]}
          components={{
            // Custom renderer to ensure images fit the screen
            img: ({node, ...props}) => <img style={{maxWidth: "100%", borderRadius: "8px", margin: "20px 0"}} {...props} />
          }}
        />
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "120px 20px 60px",
    color: "#e0e0e0",
    minHeight: "100vh",
  },
  backLink: {
    color: "#7b4bff",
    textDecoration: "none",
    marginBottom: "30px",
    display: "inline-block",
    fontWeight: "600",
  },
  header: {
    borderBottom: "1px solid #333",
    paddingBottom: "20px",
    marginBottom: "30px",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "10px",
    color: "#fff",
    lineHeight: "1.2",
    fontWeight: "bold",
  },
  meta: {
    color: "#888",
    fontSize: "1rem",
  },
  content: {
    fontSize: "1.15rem",
    lineHeight: "1.8",
    color: "#d1d5db",
  }
};

export default BlogReader;