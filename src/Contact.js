import styled from "styled-components";
import Footer1 from './components/Footer1'
import { useEffect } from "react";
const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
  <Wrapper>
    <h2 className="common-heading">Feel Free To Contact With Us</h2>

    <iframe class="gmap_iframe" width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=1134&amp;height=573&amp;hl=en&amp;q= tokha,bhutkhel&amp;t=k&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>

<div className="container">
  <div className="contact-form">
    <form
      action="https://formspree.io/f/xvonewyk"
      method="POST"
      className="contact-inputs">
      <input
        type="text"
        placeholder="username"
        name="username"
        required
        autoComplete="off"
      />

      <input
        type="email"
        name="Email"
        placeholder="Email"
        autoComplete="off"
        required
      />

      <textarea
        name="Message"
        cols="30"
        rows="10"
        required
        autoComplete="off"
        placeholder="Enter you message"></textarea>

      <input type="submit" value="send" />
    </form>
  </div>
</div>
<Footer1/>
  </Wrapper>
  )
};

export default Contact;
