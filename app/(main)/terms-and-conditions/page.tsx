import Link from "next/link";

const Page = () => {
  return (
    <div className="pt-[10vh]">
      <div className="py-20">
        <div className="w-[90%] max-w-360 mx-auto">
          <div>
            <h1 className="font-bold capitalize text-4xl">
              terms & conditions
            </h1>
            <span className="py-1">
              Last Updated: 01<sup>st</sup> April 2026
            </span>
          </div>
          <div className="pt-15 font-openSans flex flex-col gap-4">
            <p>
              Welcome to Mera Ghar (“we”, “our”, “us”). These Terms & Conditions
              govern your use of our website{" "}
              <Link
                href="www.meraghar.solutions"
                className="underline text-copper hover:text-brand-brown"
              >
                www.meraghar.solutions
              </Link>
              , owned and operated by Mera Ghar Private Limited, registered in
              Uttar Pradesh, India.
            </p>
            <p>By accessing or using our website, you agree to these Terms.</p>
            <ol className="list-decimal pl-10 flex flex-col gap-5">
              <li>Use of our website</li>
              <li>
                You may browse our website, explore our portfolio, submit
                enquiry forms, and book meetings. You agree not to:
                <ul className="list-disc pl-5 pt-3 flex flex-col gap-2">
                  <li>Use the website for illegal or harmful activities</li>
                  <li>
                    Try to disrupt or access our systems without permission
                  </li>
                  <li>Copy or reuse our content without written consent</li>
                </ul>
              </li>
              <li>
                Intellectual Property
                <ul className="list-disc pl-5 pt-3 flex flex-col gap-2">
                  <li>
                    All content, designs, images, portfolio work, logos, and
                    text displayed on this website belong to Mera Ghar Private
                    Limited unless stated otherwise. You may not copy or
                    reproduce without permission.
                  </li>
                </ul>
              </li>
              <li>
                User Submissions
                <ul className="list-disc pl-5 pt-3 flex flex-col gap-2">
                  <li>
                    When you submit forms, messages, reviews, or any information
                    on our website, you confirm accuracy and grant permission to
                    contact you.
                  </li>
                </ul>
              </li>
              <li>
                Third-Party Tools
                <ul className="list-disc pl-5 pt-3 flex flex-col gap-2">
                  <li>
                    We use Google Analytics, WhatsApp API, and Google services.
                  </li>
                </ul>
              </li>
              <li>
                Limitation of Liability
                <ul className="list-disc pl-5 pt-3 flex flex-col gap-2">
                  <li>
                    We do not guarantee uninterrupted or error-free website
                    performance and are not responsible for any losses arising
                    from use.
                  </li>
                </ul>
              </li>
              <li>
                Changes to Terms
                <ul className="list-disc pl-5 pt-3 flex flex-col gap-2">
                  <li>We may update these Terms.</li>
                </ul>
              </li>
              <li>
                Governing Law
                <ul className="list-disc pl-5 pt-3 flex flex-col gap-2">
                  <li>
                    These Terms are governed by the laws of India, Uttar
                    Pradesh.
                  </li>
                </ul>
              </li>
              <li>
                Contact
                <ul className="list-disc pl-5 pt-3 flex flex-col gap-2">
                  <li>
                    <Link
                      href="mailto:info@meraghar.solutions"
                      className="underline text-copper hover:text-brand-brown"
                    >
                      info@meraghar.solutions
                    </Link>
                  </li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
