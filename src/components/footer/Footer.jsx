import React from 'react'
import ArrowTitle from '../shared/ArrowTitle'
import "./footer.css"

export default function Footer() {
  return (
    <section className="footer">

                <div className="box-container">

                    <div className="box">
                        <h3>our branches</h3>
                        <ArrowTitle title="India" />
                        <ArrowTitle title="USA" />
                        <ArrowTitle title="france" />
                        <ArrowTitle title="africa" />
                        <ArrowTitle title="Japan" />
                    </div>

                    <div className="box">
                        <h3>quick links</h3>
                        <ArrowTitle title="home" />
                        <ArrowTitle title="about" />
                        <ArrowTitle title="menu" />
                        <ArrowTitle title="review" />
                        <ArrowTitle title="book" />
                    </div>

                    <div className="box">
                        <h3>contact info</h3>
                        <ArrowTitle title=" 070807.6323 " />
                        <ArrowTitle title=" 070807.0807" />
                        <ArrowTitle title="dat51034@donga.edu.vn" />
                        <ArrowTitle title="DaNang, VietNam - 550000" />
                    </div>

                    <div className="box">
                        <h3>contact info</h3>
                        <div> <i className="fab fa-facebook-f"></i> facebook </div>
                        <div> <i className="fab fa-twitter"></i> twitter </div>
                        <div> <i className="fab fa-twitter"></i> twitter </div>
                        <div> <i className="fab fa-instagram"></i> instagram </div>
                        <div> <i className="fab fa-linkedin"></i> linkedin </div>
                    </div>

                </div>

            </section>
  )
}
