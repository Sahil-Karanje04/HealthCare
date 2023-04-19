import React from 'react'
import './Blog.css'
import cause from '../../Assets/cause.png'
import mental from '../../Assets/mentalhealth.jpg'
import ageofdepression from '../../Assets/ageofdepression.png'
import risk from '../../Assets/risk.png'

const Blog = () => {
  return (
    <div class="container">
      <div class="row">
        <div class="d-flex align-items-center justify-content-center py-5">
          <div class="col-lg-8 col-12 order-0">
            <h3>Mental Health</h3>
            <p>Mental health includes our emotional, psychological, and social well-being. It affects how we
              think, feel, and act. It also helps determine how we handle stress, relate to others, and make
              healthy choices.1 Mental health is important at every stage of life, from childhood and
              adolescence through adulthood.
            </p>
          </div>
          <div class="col-lg-4 col-12 order-1">
            <img src={mental} />
          </div>
        </div>
      </div>
      <div className="row">
      <div class="d-flex align-items-center justify-content-center py-5">
        <div class="col-lg-8 col-12 order-1">
          <h3>What Causes Mental Health?</h3>
          <p> There is no single cause for mental illness. A number of factors can contribute to risk for mental
            illness, such as:-<br />

            -Early adverse life experiences, such as trauma or a history of abuse (for example, child abuse,
            sexual assault, witnessing violence, etc.)<br />
            -Experiences related to other ongoing (chronic) medical conditions, such as cancer or diabetes.<br />
            -Biological factors or chemical imbalances in the brain.<br />
            -Use of alcohol or drugs.<br />
            -Having feelings of loneliness or isolation.
          </p>
        </div>
        <div class="col-lg-4 col-12 order-0">
          <img src={cause} />
        </div>
      </div>
      </div>
      <div className="row">
      <div class="d-flex align-items-center justify-content-center py-5">
        <div class="col-lg-8 col-12 order-0">
          <h3>Can your mental health change over time?</h3>
          <p>
            Yes, it’s important to remember that a person’s mental health can change over time, depending on
            many factors. When the demands placed on a person exceed their resources and coping abilities, their
            mental health could be impacted. For example, if someone is working long hours, caring for a
            relative, or experiencing economic hardship, they may experience poor mental health.

          </p>
        </div>
        <div class="col-lg-4 col-12 order-1">
          <img src={ageofdepression} />
        </div>
      </div>
      </div>
      <div className="row">
      <div class="d-flex align-items-center justify-content-center py-5">
        <div class="col-lg-8 col-12 order-1">
          <h3>Risk factors for mental health conditions</h3>
          <p>
            Everyone is at some risk of developing a mental health disorder, regardless of age, sex, income, or
            ethnicity. In the U.S. and much of the developed world, mental disorders are one of the leading
            causes of disability.

            Social and financial circumstances, adverse childhood experiences, biological factors, and
            underlying medical conditions can all shape a person’s mental health.

            Many people with a mental health disorder have more than one condition at a time.

            It is important to note that good mental health depends on a delicate balance of factors and that
            several elements may contribute to developing these disorders.
          </p>
        </div>
        <div class="col-lg-4 col-12 order-0">
          <img src={risk} alt="" />
        </div>
      </div>
      </div>

    </div>
  )
}

export default Blog