import React from "react";
import "./Footer.scss";

const Footer = () => {
  return(
    <section>
        {/* first column -- add css styling later w/ classnames */}
        <table>
            <tr>
                <th>&nbsp;</th>
                <th><h4>COMPANY</h4></th>
            </tr>
        </table>
        <tr>
            <td>
                <img src="https://fluz.app/wp-content/uploads/2018/12/FluzIconOrange.svg" alt="Fluz"/>
            </td>
            <td>
                <div class="t1widget"><p><a href="https://fluz.app/careers/">Careers</a><br></br>
                <a href="https://fluz.app/press/" rel="noopener">Press</a><br></br>
                <a href="https://gear.fluz.app" rel="noopener">Gear Store</a><br></br></p>
                </div>
            </td>
        </tr>
        <div class="wpb_wrapper">
			<a href="https://itunes.apple.com/US/app/id1419812499"><span class="mu-app">&nbsp;</span></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://play.google.com/store/apps/details?id=com.fluznyc"><span class="mu-goo">&nbsp;</span></a>
		</div>
    </section>
  )
}

export default Footer;