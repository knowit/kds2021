import Layout from "./components/Layout";
import RegisterButton from "./components/RegisterButton"
import "../styling/styling.scss"

export default function Practicalities() {
    return (
        <div className="practicalities page">
            <Layout title="Practical information" header={<RegisterButton url="https://forms.gle/Ect1unFNYMcGhL8g7"
                                                                          name="Register your participation"></RegisterButton>}
                    background={true}>
                <div className="document content">
                    <h1>Practical information</h1>
                    <p>
                        The registration is now closed.
                    </p>
                    <p>
                        Knowit Developer Summit will be held 17th - 18th of January 2020 in Bergen.
                    </p>
                    <p>
                        If you have questions during or before the conference, please feel
                        free to contact us on Slack. We have created a slack-channel,{" "}
                        <a
                            className="paragraphLink"
                            href="https://knowit.slack.com/archives/kds2020"
                        >
                            #kds2020
                        </a>
                        , for everything regarding the conference, join us and get the latest
                        news! No account on slack? Then{" "}
                        <a className="paragraphLink" href="https://knowit.slack.com/signup">
                            sign up
                        </a>{" "}
                        first.
                    </p>
                    <p>
                        <strong>Dinner.</strong> We will eat dinner together on Friday
                        evening. More information later.
                    </p>
                    <p>
                        <strong>Name badges</strong> will be handed out in order to make it
                        easier with names and companies.
                    </p>
                    <p>
                        <strong>Hotel check inn</strong>. Information will follow.
                    </p>
                    <p>
                        <strong>Hotel check out</strong>. Information will follow.
                    </p>
                    <p>
                        Please stay until the end on Saturday.{" "}
                        <strong>All speakers deserve an audience.</strong>
                    </p>
                    <p>
                        We have, once again, made a cool <strong>KDS t-shirt</strong>. Even though they´re awesome,
                        there is only one per person. As such it would be great if you only took the size you ordered at
                        signup.
                    </p>
                    <p>
                        <strong>Share!</strong> Use hashtag <strong>#kds2020</strong> on
                        twitter, blog on your company blogs and make this conference visible
                        to everyone! There is lots of great content to be shared. But, please
                        be careful not to share something that is marked as confidential or is
                        customer related.
                    </p>
                    <p>
                        We want everybody to have an awesome time. If something happens that you are not comfortable
                        with, please tell us! For more information, check out our Code of Conduct {" "}
                      <a className="paragraphLink" href="/codeOfConduct">
                        here
                      </a>{" "}.
                    </p>
                </div>
            </Layout>
        </div>
    );
}
