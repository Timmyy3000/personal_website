import React from "react";
import "./Blog.css";
import ScrollAnimation from "react-animate-on-scroll";
const Blog = () => {
  return (
    <section className="blog" id="blog">
      <div className="max-width">
        <h2 className="title">DotTxt</h2>

        <div className="blog-content">
          <div className="column left">
            <ScrollAnimation animateIn="fadeIn">
              <img
                className="blog-image"
                src="assets/images/dottxt_icon.png"
                alt="dottxt"
              />
            </ScrollAnimation>
          </div>
          <div className="column right">
            <ScrollAnimation animateIn='bounceInRight'>
                <div className = "blog-info">
            <a href="https://blog.simplytimilehin.com/" className = 'blog-link'>DotTxt</a> is blog for discussion on conteporary issues as well as lifstyle topics for programmers and developers alike.
            </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn='bounceInRight'>
            <div className='tagline'>
                           Living A Constant Lifestyle, With A Variable Mindset
                            </div>
                            </ScrollAnimation>
            <ScrollAnimation animateIn='bounceInRight'>
            <div className='text'>
                            Articles
                            </div>
                            </ScrollAnimation>


                            <ScrollAnimation animateIn='bounceInRight'>
                        <div className = 'article__wrapper'>
                            <div  className = 'article__content'>
                            <img  className = 'article-img'
                        src="assets/images/is-img.jpg"
                        alt="dottxt"/>
                        <div className= "article_text_wrapper">
                            <p className ='article_title'>Imposter Syndrome : A Familiar Evil</p>
                        <p className = 'article_info'>Ever had that feeling that what you had created was mediocre? 6 out of 10 programmers have suffered from Imposter Syndrome at some point. Imposter Syndrome is characterized by a collection of feelings of inadequacy that persist despite evident success...... <a href = "https://blog.simplytimilehin.com/imposter-syndrome" className = "article-link">Read more</a> </p>
                            </div>
                       
                        </div> </div>
                  
                     
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
