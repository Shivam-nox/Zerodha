import React from "react";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#fbfbfb" }} className="border-top mt-5 pt-5 pb-4">
      <div className="container">
        <div className="row mb-4">
          {/* Logo & Copyright Section */}
          <div className="col-12 col-md-3 mb-4">
            <img 
              src="media/images/logo.svg" 
              alt="Logo" 
              style={{ width: "150px", marginBottom: "15px" }} 
            />
            <p className="text-muted" style={{ fontSize: "14px" }}>
              &copy; 2010 - 2024, Not Zerodha Broking Ltd. <br />
              All rights reserved.
            </p>
          </div>

          {/* Company Links */}
          <div className="col-6 col-md-3 mb-4 d-flex flex-column gap-2">
            <h5 className="fw-semibold" style={{ color: "#424242" }}>Company</h5>
            <a href="#!" className="text-muted text-decoration-none footer-link">About</a>
            <a href="#!" className="text-muted text-decoration-none footer-link">Products</a>
            <a href="#!" className="text-muted text-decoration-none footer-link">Pricing</a>
            <a href="#!" className="text-muted text-decoration-none footer-link">Referral programme</a>
            <a href="#!" className="text-muted text-decoration-none footer-link">Careers</a>
            <a href="#!" className="text-muted text-decoration-none footer-link">Zerodha.tech</a>
            <a href="#!" className="text-muted text-decoration-none footer-link">Press & media</a>
            <a href="#!" className="text-muted text-decoration-none footer-link">Zerodha cares (CSR)</a>
          </div>

          {/* Support Links */}
          <div className="col-6 col-md-3 mb-4 d-flex flex-column gap-2">
            <h5 className="fw-semibold" style={{ color: "#424242" }}>Support</h5>
            <a href="#!" className="text-muted text-decoration-none footer-link">Contact</a>
            <a href="#!" className="text-muted text-decoration-none footer-link">Support portal</a>
            <a href="#!" className="text-muted text-decoration-none footer-link">Z-Connect blog</a>
            <a href="#!" className="text-muted text-decoration-none footer-link">List of charges</a>
            <a href="#!" className="text-muted text-decoration-none footer-link">Downloads & resources</a>
          </div>

          {/* Account & Quick Links */}
          <div className="col-12 col-md-3 mb-4 d-flex flex-column gap-2">
            <h5 className="fw-semibold" style={{ color: "#424242" }}>Account</h5>
            <a href="#!" className="text-muted text-decoration-none footer-link">Open an account</a>
            <a href="#!" className="text-muted text-decoration-none footer-link">Fund transfer</a>
            <a href="#!" className="text-muted text-decoration-none footer-link mb-3">60 day challenge</a>

            <h5 className="fw-semibold mt-2" style={{ color: "#424242" }}>Quick Links</h5>
            <a href="#!" className="text-muted text-decoration-none footer-link">Upcoming IPOs</a>
            <a href="#!" className="text-muted text-decoration-none footer-link">Brokerage charges</a>
            <a href="#!" className="text-muted text-decoration-none footer-link">Market holidays</a>
            <a href="#!" className="text-muted text-decoration-none footer-link">Economic calendar</a>
            <a href="#!" className="text-muted text-decoration-none footer-link">Calculators</a>
            <a href="#!" className="text-muted text-decoration-none footer-link">Markets</a>
            <a href="#!" className="text-muted text-decoration-none footer-link">Sectors</a>
          </div>
        </div>

        {/* Legal Disclaimer Section */}
        <div className="text-muted mt-5" style={{ fontSize: "11px", lineHeight: "1.6" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE & BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
            no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
            complaints pertaining to securities broking please write to
            complaints@zerodha.com, for DP related to dp@zerodha.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances.
          </p>
          <p>
            <a href="#!" className="text-primary text-decoration-none">Grievances Redressal Mechanism</a> | 
            <a href="#!" className="text-primary text-decoration-none"> Smart Online Dispute Resolution</a>
          </p>
          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p>
            Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
          </p>
          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>
        </div>

        {/* Bottom Horizontal Links */}
        <div className="d-flex flex-wrap justify-content-center gap-4 mt-4 text-muted fw-semibold" style={{ fontSize: "13px" }}>
          <a href="#!" className="text-muted text-decoration-none">NSE</a>
          <a href="#!" className="text-muted text-decoration-none">BSE</a>
          <a href="#!" className="text-muted text-decoration-none">MCX</a>
          <a href="#!" className="text-muted text-decoration-none">Terms & conditions</a>
          <a href="#!" className="text-muted text-decoration-none">Policies & procedures</a>
          <a href="#!" className="text-muted text-decoration-none">Privacy policy</a>
          <a href="#!" className="text-muted text-decoration-none">Disclosure</a>
          <a href="#!" className="text-muted text-decoration-none">For investor's attention</a>
          <a href="#!" className="text-muted text-decoration-none">Investor charter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;