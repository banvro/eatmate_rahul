import { View, Text, ScrollView, StyleSheet, Image, Touchable, TouchableOpacity ,Modal} from 'react-native'
import React, { useState } from 'react'
import CustomHeading from '../../../Components/CustomHeading'
import Custombutton from '../../../Components/CustomButton/Custombutton'

const Beforebegin = ({navigation}) => {

    const [show, setShow] = useState(true)
    const [showoptiontwo, setShowoptiontwo] =useState()
    const nextBtnPressed = () => {
        navigation.navigate('Zapping')
        alert('Rest UI is underdevelopment')
    }
    return (
        <View style={{}}>
            <ScrollView style={styles.root}>
                <View style={styles.heading}>
                    <CustomHeading text={'Before you join'} />
                </View>
                <View style={styles.imgView}>
                    <Image style={styles.imgCont} source={require('../../assets/beforeujoin.png')} />
                </View>
                <View>
                    <Text style={styles.textCont}>
                        Whether it's your first time using Eatmates or you're one of our original users, please commit to respecting and including everyone in the Eatmates community.
                    </Text>
                    {show ?( null ) : (
                        <Text style={styles.textCont}>
                            <Text style={{ fontWeight: '600', textDecorationLine: 'underline', fontSize: 15 }} >{'\n'}General Standard Terms and Conditions {'\n'}{'\n'}</Text>
                            THIS IS A BIT LENGTHY DOCUMENT THAT CONSISTS OF VARIOUS IMPORTANT
                            CLAUSES  RELATED  TO  YOUR  RIGHTS,  DUTIES  AND  RESPONSIBILITIES.  BY
                            USING THE APPLICATION, YOU ARE AGREEING TO BE OBLIGED WITH
                            EATMATES APPLICATION.{'\n'}{'\n'}
                            1. Introduction{'\n'}{'\n'}
                            1.1 Eatmates is a private limited company incorporated under the laws of the Federal
                            Republic of Germany with the name “Eatmates”.{'\n'}{'\n'}
                            1.2 Eatmates works via online application, social media platforms and gives a platform,
                            administrations and a common place by which users may issue invitations (“Eatmates
                            invitations”) offering to host or serve meals (or other parties) ("Hosted") which others
                            might accept as per their convenience.{'\n'}{'\n'}
                            1.3  Your  utilization  of  the  Eatmates  application  and  the  core  services  offered  by
                            Eatmates (the "Eatmates Services") is administered by these terms and conditions set
                            out  in  this  report  and  the  records  mentioned  in  this  document  (together  with  the
                            "GSTC").{'\n'}{'\n'}
                            1.4 In these GSTC users who issue Eatmates Invitations are (in that limit) mentioned
                            as  "Hosts"  and  users  who  acknowledge  Eatmates  Invitations are  mentioned  (in  that
                            limit) as "Guests”. The request to eat/invitation can also be either way. A single client
                            of our application might be either a Host or a Guest in connection to various organized
                            Events. Eatmates gives a worldwide common ground enabling Hosts and Guests to
                            contact each other.{'\n'}{'\n'}
                            1.5 Except if Eatmates explicitly consents actually in writing, each of your dealings with
                            Eatmates will be on and subject to the terms of these GSTC. By utilizing the Eatmates
                            application and services, you give your consent to be bound by these GSTC.{'\n'}{'\n'}
                            1.6 These GSTC might be upgraded or modified from time to time without prior notice,
                            updates  will  be  posted  on  the  Eatmates  application  and  we  will  attempt  to  advise
                            enlisted users of updates, it is any way your responsibility to guarantee that you stay
                            consistent with the current GSTC from time to time. We may likewise adjust the activity
                            of the Eatmates Services and the sums charged and instalment mechanisms. These
                            changes  won't  have  a  review  application. If the altered  GSTC  are not acceptable  to
                            you, your only choice is to stop utilizing the Eatmates application and Services.{'\n'}{'\n'}
                            1.7 Subject to your compliance with these GSTC, Eatmates grants you a limited non-
                            exclusive, non-transferable licence to download and install a copy of the applications
                            forming a part of our application on each mobile device or computer that you own or
                            control and run that application solely for your own personal use. You agree to adhere,
                            in  addition  to  these  GSTC,  to  the  terms  and  conditions  applicable  to  the  device  on
                            which you run the application and store from which you download it. Eatmates reserves
                            all rights in the application not expressly granted to you by these GSTC.{'\n'}{'\n'}
                            1.8 If you do not agree to be bound by these GSTC, you may not use the Eatmates
                            application or Services.{'\n'}{'\n'}
                            2. Registration{'\n'}{'\n'}
                            2.1 Unregistered guests may visit the Eatmates application. Only enlisted users may
                            post  content  on  the  Eatmates  application  and  issue  or  acknowledge  Eatmates
                            Invitations. Registered clients can be witnessed on the Eatmates application by their
                            first name and enrolled city and country. Eatmates may rank or rate enlisted users. As
                            a Eatmates’s user, you agree that you will  only  utilize  the  Eatmates  application and
                            Services for legitimate purposes and where it is legal to utilize them.{'\n'}{'\n'}
                            2.2  You  acknowledge  and  give  your  agreement  that  by  utilizing  the  Eatmates
                            application or services or by downloading or presenting any substance on or from the
                            Eatmates application you are demonstrating that you have gone through and that you
                            understand  and  give  your  consent  to  be  bound  by  these  GSTC.  In  case  you
                            acknowledge or consent to these GSTC on behalf of an organization or other lawful
                            substance, you speak to and warrant that you have the rights and complete authority
                            to tie that organization or another lawful element to these GSTC and, on such occasion,
                            "you"  and  "your"  will  be  referred  and  applied  to  that  organization  or  another  lawful
                            element.{'\n'}{'\n'}
                            2.3 By enrolling with Eatmates you give consent to hold fast to (I) open arrangements
                            distributed  by  Eatmates  on  the  Eatmates  application,  (for  example,  the  protection
                            strategy), and (ii) the "Guest's Charter" in regard of any Eatmates Invitations that you
                            acknowledge, and (iii) the "Host's Charter" in regard of any Eatmates Invitations you
                            issue.  You  may  drop  your  enlistment  whenever  by  following  the  guidelines  on  the
                            Eatmates  Applications.  If  you  drop  your  enrollment  we  will  erase  all  by  and  by
                            identifiable data to the extent required to agree to the concerned laws. You
                            acknowledge  that  we  may  end  any  client's  enrollment  at  any  time  and  without
                            specifying any reason without prior notice.{'\n'}{'\n'}
                            2.4  Enrollment  and  access  to  the  Eatmates  Services  are  expected  exclusively  for
                            people  who  are  a  minimum  of  18  years  of  age.  Any  entrance  or  utilization  of  the
                            Eatmates application or services by anybody under 18 is explicitly restricted due to and
                            out  consideration  of  age  of  maturity  and  contract  rights.  By  using  the  Eatmates
                            Application and Services you agree to and state that you are 18 years old or more.{'\n'}{'\n'}
                            2.5 You consent to complete the enlistment procedure genuinely and as totally as you
                            are able to, and to keep the enrollment and other data about you precise and up-to-
                            date. You may keep up just a single enlistment with Eatmates, and may not enlist as a
                            Eatmates  user  in  the  interest  of  an  individual  other  than  yourself.  Your  Eatmates
                            registration  is  personal  to  you  and  may  not  be  disclosed  or  exchanged  without
                            Eatmates'  earlier  composed  agreement.  You  agree  never  to  reveal  your  login  id  or
                            password (except for the reason being, signing into the Eatmates application yourself).{'\n'}{'\n'}
                            2.6  By  enlisting  as  a  user  with  Eatmates  you  agree  that  Eatmates  may  ask  for  the
                            buyer, credit reviews, ratings and such reports on you. If Eatmates asks for any such
                            report, it will demand and utilize it in compliance with the appropriate law.{'\n'}{'\n'}
                            2.7  In  case  if  you  connect  your  enrollment  with  an  acknowledged  third  party  social
                            networking site or services, you state that you are legally able to do as such and that
                            such connection agrees to all terms you and the third party have agreed to and won't
                            get Eatmates in to any liabilities or obligations.{'\n'}{'\n'}
                            2.8 You should consent to our payment provider’s terms and conditions when you enrol
                            to make or get payments.{'\n'}{'\n'}
                            3. Our content and your use of the Eatmates Application{'\n'}{'\n'}
                            3.1 Aside from the content produced by enrolled clients, each of the components that
                            make  up  the  Eatmates  application  and  Services  (including,  without  constraining  the
                            simplification of this provision, its text, graphics, applications, programming, functions
                            and  different  highlights)  belong  to  Eatmates  (or  the  individual  from  whom  Eatmates
                            licences it). You agree that you are not entitled to any piece of the Eatmates Application
                            or Services other than to see content and use the facilities of communication regarding
                            organizing  and  advancing  Hosted  Events  and  issuing,  accepting  and  paying  for
                            Eatmates Invitations in accordance, for each situation, with these GSTC. You agree
                            that you are not allowed to replicate, reproduce, copy, distribute or mirror any piece of
                            the Eatmates Application and Services without Eatmates's earlier written permission.{'\n'}{'\n'}
                            3.2 By using the Eatmates application you agree of not doing all the following:{'\n'}{'\n'}
                            3.2.1 Go around Eatmates' legal commercial interests by participating in a transaction
                            related to a Hosted Event that is independent of the Eatmates application and Services
                            or  make  any  move  to  weaken,  harm or tarnish the Eatmates’ brand name in any
                            possible way;{'\n'}{'\n'}
                            3.2.2  Utilize  any  part  of  the  Eatmates  application  or  Services  for  any  business  or
                            different  purposes  that  are  not  explicitly  allowed  by  these  GSTC  or  in  a  way  that
                            erroneously  implied  as  Eatmates  endorsement,  association  or  generally  misdirects
                            others as to your affiliation with Eatmates or any of its clients or partners;
                            3.2.3 Utilize manual or robotized programming, gadgets, contents, robots, secondary
                            passages or different means or procedures to {'\n'}{'\n'}(I) in any way access, “crawl” or “spider”
                            any Eatmates site pages or different services related or of the Eatmates Application
                            and  Services,  or {'\n'}{'\n'}(ii)  gather  data  from  or  generally  associate  with  our  Application  or
                            Eatmates Services, or {'\n'}{'\n'}(iii) efficiently recover information or other substance from any
                            of the Eatmates application to make or accumulate, straightforwardly or by implication,
                            in single or numerous downloads, an arrangement, database, registry or comparative
                            or practically equivalent to collection of data, or {'\n'}{'\n'}(iv) access, mess with, or utilize non-
                            open aspects of any of the Eatmates application and Services or the technical delivery
                            frameworks  of  Eatmates'  accomplices,  or  {'\n'}{'\n'}(v)  attempt  to  probe,  scan,  or  test  the
                            vulnerability of any piece of any of the Eatmates Applications or Eatmates' Services or
                            Eatmates's security or confirmation measures, or {'\n'}{'\n'}(vi) harm, disable, overload or modify
                            any  piece  of  the  Eatmates  Application  or  some  other  site,  application  or  electronic
                            correspondence,  or  {'\n'}{'\n'}(vii)  communicate any  component  containing PC  viruses  or  any
                            code,  record,  or  PC  program  intended  to  intrude  on,  destroy  or  limit  the  product,
                            software, IT or media transmission hardware;{'\n'}{'\n'}
                            3.2.4  Access  or  utilize  any  of  the  Eatmates  Application  or  Services  {'\n'}{'\n'}(I)  to  utilize,
                            uncover, or permit to be utilized or uncovered, any substance that isn't freely shown by
                            Eatmates  in  its  list  items  pages  or  posting  pages  before  a  Eatmates  Invitation  is
                            acknowledged;  or  {'\n'}{'\n'}(ii)  in  any  capacity  that  is  conflicting  with  these  GSTC  or  any
                            protection or other arrangement openly received by Eatmates; or {'\n'}{'\n'}(iii) in any capacity
                            that disregards the security or some other privileges of some other of Eatmates' clients
                            or some other outsider;{'\n'}{'\n'}
                            3.2.5 Enroll as well as use any intellectual property of Eatmates (or people from which
                            it licenses protected innovation) or in the name "Eatmates" or its logo (or subsidiary
                            terms or terms that are confusingly comparable) regardless of whether in any space
                            names, exchange names, trademarks or other source identifiers, trademarks, slogans,
                            special crusades or generally or encroach the privileges of Eatmates or the privileges
                            of some other individual or element (counting, without constraining the simplification of
                            this  arrangement,  any  protected  innovation,  security,  exposure  or  legally  binding
                            rights);{'\n'}{'\n'}
                            3.2.6 Duplicate, store or generally access or utilize any data contained on any of the
                            Eatmates  Application  for  purposes  not  explicitly  allowed  by  these  GSTC  or  utilize,
                            show,  mirror  or  casing  the  any  of  the  Eatmates  Application  or  Services,  or  any
                            individual component inside the any of the Eatmates Application or Services, Eatmates'
                            name, any Eatmates trademark, logo or other restrictive data, or the format and outline
                            of any page or shape contained on a page in the Eatmates Application and  Services,
                            without Eatmates' express composed assent;{'\n'}{'\n'}
                            3.2.7  Interference  with  or  harm  any  of  the  Eatmates  Applications  or  Services
                            (counting,  without  restricting  the  sweeping  statement  of  this  arrangement,  by  the
                            utilization of infections, drop bots, Trojan steeds, hurtful code, surge pings, disavowal
                            of-benefit  assaults,  indirect  accesses,  parcel  or  IP  parodying,  produced  directing  or
                            electronic mail address data or comparative techniques or innovation) or regarding the
                            conveyance of spontaneous messages or ads (other than Eatmates Invitations);{'\n'}{'\n'}
                            3.2.8 “Stalk" or disturb some other client of any of the Eatmates Application or Services,
                            or gather or store any by and by identifiable data about some other client (other than
                            for reasons for executing as a Guest or Host);{'\n'}{'\n'}
                            3.2.9 You will not personally contact any Eatmates guest or host;{'\n'}{'\n'}
                            3.2.10 Enroll or generally request any Eatmates client to join an outsider administration
                            or  site  regardless  of  whether  it  is  aggressive  to  Eatmates,  without  Eatmates'  earlier
                            composed endorsement;{'\n'}{'\n'}
                            3.2.11 Avoid, bypass, impair, remove, deactivate, scramble, descramble, or otherwise
                            generally evade any technological measure actualized by Eatmates or any of
                            Eatmates'  suppliers  or  some  other  third  party  (including  another  user)  to  save  any
                            piece of the Eatmates Application or Services, forge any TCP/IP bundle header or any
                            piece of the header data in any email or newsgroup posting, or in any capacity utilize
                            any piece of any of the Eatmates Application or Services to send adjusted, beguiling
                            or  false  source-distinguishing  data  or  endeavor  to  unravel,  decompile,  dismantle  or
                            figure  out  any  of  the  product  used  to  give  them  any  piece  of  any  of  the  Eatmates
                            Application or Services; or{'\n'}{'\n'}
                            3.2.12 Advocate, encourage or assist any third party in doing any of the foregoing.{'\n'}{'\n'}
                            3.3 You agree not to evacuate, alter or obscure any copyright, trademark, service mark
                            or  other  exclusive  rights  fused  in  or  part  of  the  Eatmates  Application,  Eatmates
                            Services  and  ancillary  documentation.  You  likewise  agree  not  to  utilize,  duplicate,
                            modify, alter, prepare subordinate works in light of, appropriate, permit, offer,
                            exchange,  freely  show,  openly  perform,  transmit,  communicate  or  generally  misuse
                            the Eatmates Application or Services aside from as explicitly allowed in these GSTC.
                            No  licenses  or  rights  are  allowed  to  you  by  suggestion  or  generally  under  any
                            intellectual property rights claimed or controlled by Eatmates or its licensors, apart from
                            the licenses and rights explicitly conceded in these GSTC.{'\n'}{'\n'}

                            4 Your Content{'\n'}{'\n'}
                            4.1  Only enlisted users may post content on the Eatmates Application. Anything that
                            you post (or generally cause to be visible) on  an Eatmates Application is considered
                            for  the  reasons  of  these  GSTC  to  be  content  distributed  by  you  ("Your  Content").
                            Eatmates's arrangement isn't to alter or direct Your Content except if required to do as
                            such  to  guarantee  consistency  with  these  GSTC  or  with  your  earlier  consent.  You
                            agree  that  if  you  have  connected  your  Eatmates  enrollment  with  any  third  party
                            services, these services may trade data and you will be esteemed to have distributed
                            any data influenced accessible by the outsider to benefit because of the records being
                            connected.{'\n'}{'\n'}
                            4.2 By registering with Eatmates application you agree to be responsible and legally
                            accountable for all your content.{'\n'}{'\n'}
                            4.2.1 All your representation that you publish is completely true.{'\n'}{'\n'}
                            4.2.2  You  will  not  utilize  the  Eatmates  Application  or  Services  to  offer  items  or
                            administrations other than Eatmates Invitations.{'\n'}{'\n'}
                            4.2.3  You  will  not  post,  transfer,  distribute,  submit  or  transmit  anything  that:{'\n'}{'\n'}(I)
                            encroaches, misuses or disregards an third party's patent, copyright, trademark, moral
                            rights  or  other  protected  intellectual  rights,  or  privileges  of  reputation  or  security  or
                            rights  to  image;  or{'\n'}{'\n'}(ii)  damages,  or  supports  any  lead  that  would  disregard,  any
                            appropriate  law or  control  or  would  offer ascent  to  common  or  criminal  obligation  or
                            may be required to impel any against social conduct; or {'\n'}{'\n'}(iii) is fake, false, deceptive
                            (straightforwardly  or  by  oversight  or  inability  to  refresh  data)  or  beguiling;  or  {'\n'}{'\n'}(iv)  is
                            defamatory, derogatory, oppressive, debilitating, bothering or foul, obscene, revolting
                            or may somehow or another be observed to be offensive by a sensible individual; or
                            {'\n'}{'\n'}(v) is unfair, preferentially narrow minded, supremacist, detest enlivened, bugging or
                            destructive toward any individual or gathering, against Semitic, paedophilic, inducing
                            savagery, racial or ethnic scorn, unlawful or that is in some other way inexcusable; or
                            {'\n'}{'\n'}(vi) is vicious or undermining or advances brutality or activities that are undermining to
                            any individual or gathering; or {'\n'}{'\n'}(vii) advances illicit or hurtful exercises or substances;
                            or (viii) approves or advances any of the things recorded in (I) to (vii);{'\n'}{'\n'}
                            4.2.4 None of Your Content will incorporate any pictures which you don't own which
                            incorporate or portray any identifiable individual who has not allowed to the use of the
                            picture (and, on account of pictures taken at a Hosted Event, in regard of which the
                            pertinent Host has agreed to you sharing and posting);{'\n'}{'\n'}
                            4.2.5  You  will  not  utilize the  Eatmates  Application  or  Services  to  {'\n'}{'\n'}(I)  transmit,
                            disseminate, post or present any data concerning some other individual or substance
                            (counting, without constraining the sweeping statement of this arrangement, photos,
                            contact  or  transmit  data  or  credit,  charge,  managing  an  account  or  other  record
                            numbers)  without  the  applicable  individual's  earlier  authorization;  or  {'\n'}{'\n'}(ii)  impersonate
                            any individual or element, or distort or generally distort yourself or your connection with
                            any individual or element;{'\n'}{'\n'}
                            4.2.6 All Your Content shall be public and must associate with you.{'\n'}{'\n'}
                            4.2.7  Eatmates  is  under  no  obligation  to  store  or  potentially  distribute  Your  Content
                            (and Eatmates may whenever and without earlier notice erase Your Content from any
                            piece of the Eatmates Application);{'\n'}{'\n'}
                            4.2.8  In  spite  of  the  fact  that  you  remain  the  proprietor  of  (and  in  charge  of)  Your
                            Content, nothing in any connection amongst you and Eatmates works to exchange any
                            intellectual property rights to you;{'\n'}{'\n'}
                            4.2.9 You allow Eatmates of globally, non-elite, transferable, sub-licensable,
                            sovereignty free permit to utilize all substance (and all related protected innovation) in
                            any substance made accessible by you on the Eatmates Application;{'\n'}{'\n'}
                            4.2.10 Eatmates may alter, repeat (in entire or to some extent), make an interpretation
                            of,  connection  to  and  from,  gathering  and  generally  manage  Your  Content  (or
                            components of it) as it seems fitting;{'\n'}{'\n'}
                            4.2.11 Eatmates may utilize and misuse Your Content (and data that Eatmates finds
                            out  about  you)  to  speak  with  you,  target  publicizing  to  you  and  create,  execute  and
                            refine showcasing efforts and to advance Eatmates' Services for the most part; and{'\n'}{'\n'}
                            4.2.12 You shall not advocate, encourage, or assist any third party in doing any of the
                            foregoing.{'\n'}{'\n'}
                            4.3 You agree that any profile photo that you transfer is a legit portrayal of you and
                            does not encroach any licensed innovation rights having a place with an outsider and
                            that you explicitly approve Eatmates to utilize your picture.{'\n'}{'\n'}
                            4.4  By  agreeing  these  GSTC  you  give  Eatmates  an  around  the  world,  permanent,
                            never-ending (or for the term of the assurance), non-selective, transferable,
                            sovereignty  free  permit,  with  the  privilege  to  sublicense,  to  utilize,  see,  duplicate,
                            adjust,  interpret,  change,  disseminate,  permit,  offer,  exchange,  openly  show,  freely
                            perform,  transmit,  stream,  communicate,  access,  see,  and  generally  abuse  Your
                            Content (which may incorporate distributing it on, though, by methods for the Eatmates
                            Application and Services and may likewise incorporate advancing or showcasing the
                            Eatmates Application and Services). Eatmates does not guarantee any proprietorship
                            rights  in  Your  Content  and  nothing  in  these  GSTC  will  be  esteemed  to  confine  any
                            rights that you may need to utilize and abuse Your Content.{'\n'}{'\n'}
                            4.5 Despite the licenses conceded to Eatmates as per provisions 4.2.8
                            and 4.3, Eatmates will utilize sensible undertakings to evacuate such of Your Content
                            as you ask for us to expel from our current Eatmates Application (the demand to be
                            made through your enlisted account and affirmed in a recorded conveyance letter with
                            marked verification of receipt including adequate subtle elements for us to recognize
                            you  and  the  important  piece  of  Your  Content  that  you  ask  for  is  expelled  from  the
                            Eatmates Application).{'\n'}{'\n'}
                            4.6  The  Eatmates  Application  and  Services  may  give  connections  or  referrals  to
                            different sites, administrations, distributions or applications. Eatmates makes and gives
                            no  portrayal, underwriting,  certification  or  affirmation  with  regards to  the  unwavering
                            quality of any such site, benefit distribution or application and by consenting to these
                            GSTC  you  agree  that  you  will  not  depend  on  Eatmates  when  evaluating  or  utilizing
                            them and that Eatmates will under no situation be capable to you for any
                            disappointment  of  any  sites, administrations,  productions  or  applications for  which  it
                            isn't  responsible.  Eatmates  accepts  no  accountability  for  the  substance  of  sites
                            connected on our site. Eatmates won't be at risk for any misfortune or harm that may
                            emerge from your utilization of them. In this setting, you affirm that Eatmates isn't in
                            charge of the activities or disappointments of its instalment suppliers.{'\n'}{'\n'}
                            4.7  You  agree  and  assent  that  Eatmates  may  (however  isn't  obliged  to)  utilize
                            interpreters  and  duplicate  editors  (and  may  apply  computerized  interpretation  and
                            duplicate altering administrations) to Your Content to change the style or dialect utilized
                            by you. Except to the degree that anything done by Eatmates make a commitment or
                            obligation which would not generally have emerged, you agree that these procedures
                            will  not  reduce  any  duty  or  risk  you  have  for  Your  Content  (and  that  you  will  hold
                            Eatmates safe from any misfortune it might endure because of facilitating or generally
                            managing Your Content).{'\n'}{'\n'}
                            5. Data{'\n'}{'\n'}
                            5.1  By  agreeing  on  these  GSTC  you  agree  that  Eatmates  may  examine  and  break
                            down  information  from  your  use  of  the  Eatmates  Application  and  Services  and  may
                            utilize and sell the subsequent data and information.{'\n'}{'\n'}
                            5.2 Eatmates will utilize reasonable undertakings to guarantee that unless you come
                            into agreement otherwise your personal data won't be shared with any third party but
                            to  the  required  extent  to  embrace  reasonable  verification,  important  to  offer  the
                            Eatmates Services or to operate the Eatmates Application or as allowed by provision
                            5.3.{'\n'}{'\n'}
                            5.3 You explicitly allow us authorization, without additional notice, to store, exchange
                            and share information and other data related to you or to your transactions, including,
                            however  not  restricted  to,  personally  identifiable  data  to  any  pertinent  duty  or  other
                            governmental or competent administrative or law implementation specialist or
                            organization that claims to be entitled for such data.{'\n'}{'\n'}
                            5.4 To the required extent by appropriate law, Eatmates will on demand of the relevant
                            enlisted  user  erase  all  data  that  is  personal  to  that  enrolled  user.  Eatmates  may,
                            nonetheless (subject to applicable laws) hold information that may have been received
                            by past associations with Eatmates provided that that information can't be connected
                            to any distinctive individual.{'\n'}{'\n'}
                            5.5  Eatmates  has the  rights  to market  these  outcomes  received  from the  auto  data
                            handling.{'\n'}{'\n'}
                            5.6 You agree not to make a false impression that you are supported by, partnering
                            with,  or  following  up  for  the  benefit  of  or  on  behalf  of  Eatmates,  including  by
                            inappropriately using any intellectual property of Eatmates.{'\n'}{'\n'}
                            6. Hosted Events{'\n'}{'\n'}
                            6.1  The  Eatmates  Application  and  Eatmates  Services  contain  an  online  platform
                            intended to empower Hosts to make Eatmates Invitations for Hosted Events and for
                            Guests  to  find  out about  and  book  Hosted  Events  with  the  Hosts directly  and  solely
                            serves as an intermediation between Host and Guest. You comprehend and agree that
                            Eatmates isn't a party to any assertions amongst Hosts and Guests and that Eatmates
                            has no influence over (and not liable or obligated to you in regard of) the lead of {'\n'}{'\n'}(I)
                            Hosts, {'\n'}{'\n'}(ii) Guests, {'\n'}{'\n'}(iii) different users of the Eatmates Application and Services or {'\n'}{'\n'}(iv)
                            others attending  to  or encouraging  Hosted  Events. You  agree  that Eatmates  isn't  in
                            charge  of  any  harm  or  damage  resulting  out  of  your  communications  with  different
                            clients  of  the  Eatmates  Application  or  Services  and  you  acknowledge  that  (to  the
                            greatest  extent  allowed  by  law)  Eatmates  renounces  all  obligation  coming  about
                            because of the conduct or any such individual.{'\n'}{'\n'}
                            6.2 The OTP (one time password) code is a unique and random 4-digit numeric code
                            that is generated, the moment an event is reserved and is confirmed at Eatmates. It
                            uniquely identifies the events. This OTP must not be shared with anybody except the
                            relevant  Guest  and  Host  of  the  particular  event.  Eatmates  consider  the event
                            successful and completed once the OTP is shared by Guest with the Host of the event
                            and communicated with Eatmates. Any claim arising after the sharing of the OTP would
                            be considered to be there after null and void.{'\n'}{'\n'}
                            6.3 By consenting to these GSTC you consent to hold fast to every single material law
                            and directions (counting without restricting the all-inclusive statement of this
                            arrangement, monetary and managerial controls) that apply to any Hosted Event.{'\n'}{'\n'}
                            6.4 You agree that Eatmates will under no situation be considered responsible or liable
                            for any portrayal in Eatmates Invitation or for a Hosted Event not running easily or as
                            promoted or generally being inadmissible.{'\n'}{'\n'}
                            6.5 In specific conditions, Eatmates may choose, in its sole prudence that it is essential
                            or attractive to drop a Hosted Event. In these conditions Eatmates may decide, in its
                            sole circumspection, to discount to the Guest part or the majority of the sums charged
                            to the Guest. You agree that Eatmates and the applicable Guest or Host will have no
                            obligation to you in regard of such retractions or discounts.{'\n'}{'\n'}
                            7. Financial arrangements{'\n'}{'\n'}
                            7.1 When issuing Eatmates Invitations Hosts state the fees that they will charge each
                            Guest, these fees are quoted inclusive of all sales and analogous or other taxes (the
                            “Host’s Charges”). Eatmates arranges a service for these fees to be collected and held
                            in a third-party trust account on terms that the funds will be paid in accordance with
                            these  GSTC  (arranging  this  collection  and  holding  service  constitutes  a  part  of  the
                            Eatmates Services). Eatmates may charge Guests a fee for the use of the Eatmates
                            Services  (the  “Eatmates  Fees”).  Acceptance  of  a  Eatmates  Invitation  constitutes
                            agreement  to  pay  the  Host’s  Charges  and  any  Eatmates  Fees  (the  “Transaction
                            Fees”).The total amount of the Transaction Fees is the amount payable by the Guest
                            in respect of each Eatmates Invitation at the time that the Guest accepts the Eatmates
                            Invitation.{'\n'}{'\n'}
                            7.2 Where applicable, the Eatmates Fees are calculated as a variable percentage of
                            the Host’s Charges. Any Eatmates Fees are payable by the Guests at the same time
                            as payment of the Host’s Charges.To the extent that the Eatmates Fees are subject to
                            sales taxes, such as VAT, these taxes will be included in the total amount payable by
                            the Guest in respect of the Transaction Fees.Where Eatmates charges Eatmates Fees
                            it shall on request provide an invoice in respect of those Eatmates Fees, separately
                            identifying any sales taxes charged by Eatmates.{'\n'}{'\n'}
                            7.3 Hosts agree and acknowledge that they are responsible for discharging all of their
                            own tax obligations (including sales taxes including, but not limited to, VAT) whether
                            these are  imposed on  a  state,  local  or  other  level.  Eatmates  assume  no  obligations
                            whatsoever in this regard. In particular, Eatmates assumes no responsibility (actual or
                            deemed)  to  notify  or  explain  to  Hosts,  or  to  enquire  into,  the  VAT  or  sales  taxes
                            treatment of any Hosts or Hosted Events.{'\n'}{'\n'}
                            7.4 If Eatmates so requires for the purposes of its dealings with any tax or regulatory
                            authority,  Hosts  and  Guests  shall  provide  to  Eatmates,  promptly  on  request,  any
                            information, data, documentation and/or copies of communications (whether in
                            electronic  format  or  otherwise)  which  relate  to  Hosted  Events  in  which  they  have
                            participated.  Hosts  shall,  promptly  on  request,  provide  to  Eatmates  all  reasonable
                            assistance in any discussion or dispute with any tax authority with respect to the VAT
                            or sales tax treatment of Hosted Events in which those Hosts have participated. Each
                            Host agrees to indemnify Eatmates for any VAT or similar sales tax obligations which
                            Eatmates is required to pay and which arise wholly from Hosted Events hosted by that
                            Host.{'\n'}{'\n'}
                            7.5  You  may  only  make  payments  in  respect  of  Eatmates  Invitations  through  the
                            payment  processing  facilities  provided  on  the  Eatmates  Applications,  by  special
                            arrangement with Eatmates through its direct booking services or of through a third-
                            party  agency  that  is  authorised  by Eatmates  to  provide  those  parts  of  the Eatmates
                            Services relating to processing payments. Please check with Eatmates to ensure that
                            any third-party with whom you are dealing is properly authorised by Eatmates. If the
                            Eatmates  Invitation  is  transacted  through  an  authorised  third-party  you  may  not  be
                            required to pay any Eatmates Fees, but the authorised third-party agent may instead
                            charge an administration fee.{'\n'}{'\n'}
                            7.6 You agree that the sole and exclusive role and responsibility of Eatmates (and any
                            of its authorised third-party  agents) in providing Eatmates Services relating to
                            processing payments is to arrange the collection of payments from Guests and for the
                            payment of the amounts collected in accordance with these GSTC (and you agree that
                            they have no other or further liability to you in respect of any payment made).{'\n'}{'\n'}
                            7.7 Payments are made by Guests through selected payment providers.The terms on
                            which  the  payment  providers  hold  funds  are  stated  in  their  terms.  Eatmates  may
                            receive amounts due to Hosts from payment providers, where it does so such funds
                            will be held in a bank account (separate from Eatmates’ own trading bank account)
                            until they are transferred to the Host (or, where appropriate, reimbursed to the Guest).{'\n'}{'\n'}
                            7.8 Eatmates may “round off” numbers to the  nearest  functional  base  unit  in  the
                            relevant  currency.  Eatmates  uses  commercial  currency  exchange  operators  and
                            registered users accept the risks in fluctuations in currency exchange rates{'\n'}{'\n'}
                            8. Insurance, disputes, resolution and refunds{'\n'}{'\n'}
                            8.1  Guests  may  need  to  cancel  an  Eatmates  Invitation  that  they  have  previously
                            accepted,  only  if    there  is  no  possibility  of  cancellation  through  application,  in  such
                            cases please contact Eatmates at contact@eatmates.com . Guests shall qualify for a
                            refund of the Host’s Charges if {'\n'}{'\n'}(a) the Guest notifies Eatmates and the Host, of
                            cancellation during usual business hours in Federal Republic of Germany (being 9am
                            to 5pm on weekdays other than public holidays) at least 48 hours before the date on
                            which  the  relevant  Hosted  Event  is  due  otherwise  the  refund  would  be  based
                            considering only the convenience of the Host loss of resources due to the booking of
                            the event, or {'\n'}{'\n'}(b) if the Host cancels the Hosted Event for any reason.
                            8.2 We hope all Guests enjoy every Hosted Event, however in the event of things go
                            wrong and if a Guest believes that the Host failed to fulfil an essential obligation of the
                            Hosted Event then the Guest may until midnight on the day following the date on which
                            the relevant Hosted Event was scheduled to take place request that the whole or a part
                            of  the  payment  is  refunded  by  using  the  claim  form  on  the  page  summarizing  the
                            reservation  or  by  sending an  email to contact@eatmates.com  specifying  the  Hosted
                            Event reference, identifying the Host, specifying the amount of the Transaction Fees,
                            saying how much the Guest wishes to be reimbursed and giving as much information
                            as  possible  in  relation  to  the  problem/  relevant  failures/  reasons  for  believing  that
                            payment should be refunded. Both host and guest are expected to provide the proof
                            of event occurring/not occurring and the decision made by Eatmates would be treated
                            as the final in dispute resolution by both host and guest.{'\n'}{'\n'}
                            8.3 Eatmates has currently no insurance policy in force for the registered users, that
                            implies, currently it is not intended to give any benefits and protection on the Eatmates
                            Applications.  Please  notify  Eatmates  immediately  at contact@Eatmates.com  if  you
                            have suffered loss, we would set up an internal enquiry to support you and also protect
                            other  users  of  application.  The  notification  should  include  all  relevant  details  and
                            include such information and evidence as is available to you to substantiate the claim.
                            By  sending  the  email  you  agree  to  provide  us  with  all  further  information  that  is
                            reasonably available to you which we request in relation to the claim, any proposed or
                            agreed resolution of any of the circumstances relating to the claim with any third party.
                            Eatmates does not agrees to any indemnify or compensate you in respect of any such
                            losses. Save as provided in this clause 8.3Eatmates has no further or other obligation
                            or liability in respect of its guarantee.{'\n'}{'\n'}
                            8.4 If you have a dispute relating to a Hosted Event, we encourage you (although this
                            is  not  compulsory)  to  contact  our  claims  department  in  order  to  try  to  resolve  the
                            dispute amicably. Our claims service can be contacted:
                            ● By email at the following address: contact@eatmates.com{'\n'}{'\n'}
                            8.5  It  is  important  that  if,  as  a  Guest,  you are  not  satisfied  with a Hosted  Event  you
                            notify Eatmates before midnight on the day following the date on which the relevant
                            Hosted Event was scheduled to take place. Once Eatmates has released funds to the
                            Host, it is unable to offer Guests any remedy.{'\n'}{'\n'}
                            8.6 Following receipt of a refund request Eatmates may direct that an amount up to the
                            entire value of the Transaction Fees paid by the Guest (less payment transaction costs
                            and any third-party agency fees that Eatmates is not entitled to recover) is refunded to
                            the Guest. If, however, Eatmates believes that the complaint is without merit, of limited
                            merit or that Eatmates is not able to assess the merit of the complaint, then Eatmates
                            may direct that the whole or any part of the Transaction Fees are paid to the Host and/
                            or that the balance (if any) is withheld pending resolution of the dispute between the
                            relevant Host and the Guest. If no such resolution has been reached within six months,
                            Eatmates may direct that 50% of the disputed element of the Host’s Charges is paid to
                            the Host and that 50% of the disputed element of the Host’s Charges is paid to the
                            Guest  (and  the  Eatmates  Fees  shall  be  paid  to  Eatmates)  or  may  make  such  other
                            arrangements as then appear appropriate to it (which may include making payment as
                            directed by a Court of competent jurisdiction).Eatmates shall have no further or other
                            liability  or  responsibility  to  the  Host  and  Guest  in  respect  of  any  such  claim  to  be
                            refunded.  You  agree  to  abide  by  decisions  made  by  Eatmates  (even  if  the  decision
                            appears perverse to you).{'\n'}{'\n'}
                            8.7 Eatmates agrees to use reasonable endeavors to assess merits of claims and to
                            act  in  good  faith  toward  Guests  and  Hosts,  however  you  agree  that  it  has  no
                            responsibility or liability to you for any assessment it makes in relation to the merits of
                            any claim between Guests and Hosts or any direction it gives as to the payments to be
                            made  to  Guests  or  Hosts  in  accordance  with  this  clause  8  and  you  also  agree  that
                            Eatmates may make or decline refunds and payments pursuant to these GSTC and
                            that if and to the extent it does so it shall have no further liability or obligation to you or
                            the Host or Guest.{'\n'}{'\n'}
                            8.8  Eatmates  will  endeavor  to  make  refunds  to  Guests  through  the  same  payment
                            facility  through  which  the  payment  was  originally  made.  Where  it  is  not  possible  to
                            make  such  a  refund,  it  will  require  other  verification  before  the  refund  can  be
                            processed.  The  Guest  agrees  to  bear  the  cost  of  currency  exchanges  and  risks  in
                            fluctuations in currency exchange rates.{'\n'}{'\n'}
                            8.9 By accepting these GSTC you agree that if Eatmates has followed the processes
                            mentioned above in good faith it shall have no further or other liability or obligation to
                            you.{'\n'}{'\n'}
                            8.10 Eatmates has no responsibility or liability in respect of any failing by a payment
                            processor or authorized agent.{'\n'}{'\n'}
                            9 Exclusions and limitations to Eatmates responsibility and liability{'\n'}{'\n'}
                            9.1  You  agree  by  issuing  or  accepting  a  Eatmates  Invitation  you  don't  make  any
                            association with Eatmates save as explicitly given in these GSTC. Eatmates does not
                            control and has no privilege to control, your Eatmates Invitation, your offline exercises
                            related to your Eatmates Invitation, or some other issues identified with any Eatmates
                            Invitation that you distribute.{'\n'}{'\n'}
                            9.2 Registered users are required by these GSTC to give precise data about yourself
                            and just to post solid and exact substance to the Eatmates Application and not, when
                            utilizing the Eatmates Application or Services, to make any verifiably wrong, fake or
                            misdirecting explanations or representations. By agreeing to these GSTC you agree
                            that Eatmates, its installment suppliers or potentially different accomplices may ask for
                            identification verification from you (and you consent to conform to such demands as
                            are sensible made) and may utilize other data or assets accessible to them to confirm
                            your  character,  to  attempt  administrative  checks  and  as  far  as  possible  ill-advised
                            utilization of the Eatmates Applications, Eatmates Services and different
                            administrations  gave by  the  installment  suppliers  and  other  partners.  Eatmates may
                            embrace  any  commitment  to  you  to  attempt  any  such  checks  and  you  agree  that
                            Eatmates does not speak to, support, ensure or affirm the character of any client or
                            the exactness of any substance or portrayal made by any client or generally got from
                            (or conveyed regarding or because of) any of the Eatmates Application or Eatmates
                            Services (and by consenting to these GSTC you unavoidably agree that except to the
                            extent  otherwise  expressly  agreed  by  Eatmates  you  defer  any  privilege  to  assert
                            dependence on any such representation, endorsement, guarantee or confirmation).{'\n'}{'\n'}
                            9.3  To  the  extent  allowed  by  law,  Eatmates  excludes  all  conditions,  guarantees,
                            portrayals or different terms which may apply to the Eatmates Application and Services
                            or any substance on them, regardless of whether express or inferred. Eatmates won't
                            be at risk to any client for any misfortune or harm, regardless of whether in contract,
                            tort  (including  carelessness),  break  of  a  statutory  obligation,  or  something  else,
                            regardless of whether predictable, emerging under or regarding:{'\n'}{'\n'}
                            9.3.1 Utilization of, or inability to utilize, any of the Eatmates Application or Services;
                            or{'\n'}{'\n'}
                            9.3.2 Utilization of or dependence on any substance showed on any of the Eatmates
                            Application or Eatmates Services.{'\n'}{'\n'}
                            9.4 Subject as gave in provision 8.3, Eatmates won’t be at risk for:{'\n'}{'\n'}
                            9.4.1 Loss of benefits, deals, business, or income;{'\n'}{'\n'}
                            9.4.2 Business interference;{'\n'}{'\n'}
                            9.4.3 Loss of foreseen savings;{'\n'}{'\n'}
                            9.4.4 Loss of business opportunity, generosity or reputation; or{'\n'}{'\n'}
                            9.4.5 Any aberrant or noteworthy damage or harm.{'\n'}{'\n'}
                            9.5 Eatmates won't be obligated for any misfortune or harm caused by an infection,
                            conveyed refusal of-benefit assault, or other mechanically  harmful material that may
                            contaminate  your  PC  gear,  PC  projects,  information  or  other  exclusive  material
                            because of your utilization of our application or to your downloading of any substance
                            on it, or on any site connected to it.{'\n'}{'\n'}
                            9.6  By  utilizing  the  Eatmates  Application  and  Eatmates  Services,  you  agree  not  to
                            endeavor to force an obligation on or look for any lawful cure from Eatmates concerning
                            such activities or exclusions.{'\n'}{'\n'}
                            9.7 You agree that to the greatest degree allowed by law Eatmates has no obligation
                            or  duty  to  you  in  regard  to  any  broad  or  particular  disappointment,  suspension  or
                            intrusion  in  any  services  offered  by  any  of  the  Eatmates  application  or  mistake  or
                            exclusion in data or preparing given on or by the Eatmates Applications or loss of data
                            given to the Eatmates Applications.{'\n'}{'\n'}
                            9.8  Nothing  in  these  terms  of  utilization  rejects  or  restrains  our  risk  for  death  or
                            individual damage emerging from our carelessness, or our extortion or false deception,
                            or whatever other obligation that can't be prohibited or constrained by law of your land.{'\n'}{'\n'}
                            9.9 Save to the extent that liability may not be excluded by law:{'\n'}{'\n'}
                            9.9.1 Eatmates has no liability save to the extent admitted by clauses  9.8, 9.9.2 and
                            9.9.3;{'\n'}{'\n'}
                            9.9.2 Eatmates obligation to the Host is restricted to the sum gathered by Eatmates as
                            operator of the Host in regard of the Hosted Event to which the applicable claim relates
                            and not paid to the Host (or, where fitting, discounted to the Guest) as per these GSTC
                            and any sum recuperated under the protection approach alluded to in condition  8.3;
                            and{'\n'}{'\n'}
                            9.9.3 Eatmates liability to the Guest is restricted to extent of the commission paid to it
                            by the Guest in regard of the Hosted Event to which the pertinent claim relates and
                            any amount recouped under the protection arrangement alluded to in provision 8.3.{'\n'}{'\n'}
                            9.10 You agree and affirm that on the off chance that you utilize any of the Eatmates
                            Application  or  the  Eatmates  Services  to  enter  any  agreement  with  someone  else
                            (regardless of whether in your capacity as a Guest or as a Host) you ought to enter an
                            agreement with that other individual (that understanding might be or involve the terms
                            and conditions on which the Eatmates Invitation is offered and accepted). You consent
                            to stick to the terms of any such agreement. You recognize and agree that you, and
                            not Eatmates, are in charge of guaranteeing that each counter-gathering to any such
                            assertion  conforms  to  the  terms  of  that  assertion  and  fulfils  any  commitments  the
                            counter-party needs to you. By consenting to these GSTC you additionally agree that
                            Eatmates  isn't  a  gathering  to  any  assertion  amongst  you  and  some  other  individual
                            (whether  as  Guests,  Hosts,  specialists  or  in  some  other  limit)  and  that  (but  to  the
                            degree that Eatmates or any of its operators concede to and subject to the terms of
                            statement and alternate arrangements of these GSTC and as a feature of the Eatmates
                            Services to orchestrate the accumulation, holding and installment of Transaction Fees
                            as a major aspect of the Eatmates Services) Eatmates has no liability to you or some
                            other individual emerging from or identified with any assertions amongst Guests and
                            Hosts.{'\n'}{'\n'}
                            9.11  Subject  to  the  arrangements  of  provision  9,  agree  that  none  of  Eatmates,  its
                            employees, workers, specialists or different delegates is at risk to you for any harm,
                            regardless of whether immediate or backhanded, coming about because of utilization
                            of the Eatmates Application or the Eatmates Services regardless of whether Eatmates
                            has learning or has been educated of the probability of the event of such harm.{'\n'}{'\n'}
                            10 Cancellation and suspension{'\n'}{'\n'}
                            10.1 You may end your enrollment with Eatmates by sending us an email from your
                            enlisted email to contact@eatmates.com.{'\n'}{'\n'}
                            10.2 Eatmates may end or suspend your enrollment for accommodation any time by
                            giving you a notice by means of email to your enlisted email address.{'\n'}{'\n'}
                            10.3 If your Eatmates enrollment is dropped all Hosted Events in regard of which you
                            had  issued  Eatmates  Invitation  will  be  naturally  dropped  and  all  Hosted  Events  in
                            regard of which  you  had  acknowledged  a  Eatmates  Invitation  will  likewise be
                            consequently dropped. Contingent upon the pertinent retraction arrangement, a fitting
                            discount might be issued.{'\n'}{'\n'}
                            11 Miscellaneous{'\n'}{'\n'}
                            11.1 You pronounce and certificate to Eatmates that you are a person more than 18
                            years old as well as having the legitimate ability to go into an agreement.{'\n'}{'\n'}
                            11.2 Some segments of the Eatmates stage execute third party Maps/Earth mapping
                            administrations, including Maps API(s). Your use of Maps/Earth or any other third party
                            API or apps is liable to terms of utilization of the service providers.{'\n'}{'\n'}
                            11.3 In the event that you end up mindful of any substance on any of the Eatmates
                            Application  that you  think has been posted in rupture of these GSTC please
                            communicate  to  us  by  email  at  contact@eatmates.com.  It  will  be  useful  on  the  off
                            chance that you can incorporate {'\n'}{'\n'}(a) subtle elements of the substance concerned, {'\n'}{'\n'}(b)
                            data  to  empower  us  to  find  the  substance  being  referred  to  on  the  Eatmates
                            Application,  {'\n'}{'\n'}(c)  your  contact  data  (full  name,  postal  address,  phone  number,  email
                            address and, where material, the name of the body for whose sake you are reaching
                            us, its postal address, its enrollment number), {'\n'}{'\n'}(d) an announcement, where pertinent,
                            that you are the proprietor of protected innovation rights or rights to a picture or to the
                            individual concerned or approved to act for the sake of the proprietor.{'\n'}{'\n'}
                            11.4 You recognize and agree that Eatmates may store individual and other data about
                            you on your electronic gadgets as "cookies'' and different projects and devices. The
                            utilization of these exclusively concerns the working of the Eatmates Application. You
                            recognize and agree that in the event that you don't permit or break the setting of treats
                            on your gadgets, this ban or confinement may adversely  affect your utilization of the
                            Eatmates Application. You recognize and agree that Eatmates may likewise store your
                            own  data  on  PCs  and  servers.  By  utilizing  the  Eatmates  Application,  you  recognize
                            and agree that Eatmates may, at its sole discretion store or uncover this data if required
                            to do as such by law or if there are not kidding motivations to imagine that capacity or
                            exposure of this data is required to fit in with a lawful technique.{'\n'}{'\n'}
                            11.5 The publishing director of the Eatmates Application is the director of Eatmates,
                            Mr. Kalyan Singh. The Eatmates Application is hosted and managed by Eatmates.
                            11.6 For any question relating to the Eatmates Applications or Eatmates Services you
                            can contact us by the following means:{'\n'}
                            By email: contact@eatmates.com{'\n'}{'\n'}
                            11.7 Reference to in these GSTC to:{'\n'}{'\n'}
                            11.7.1  A  "man"  or  "company"  incorporates  a  reference  to  all  legitimate  or  neutral
                            people,  partnerships,  trusts,  organizations,  governments  or  neighborhood  specialist
                            divisions  and  different  bodies  and  affiliations  (regardless  of  whether  corporate  or
                            unincorporated);{'\n'}{'\n'}
                            11.7.2 An individual incorporates where proper his own delegates;{'\n'}{'\n'}
                            11.7.3 The solitary incorporates a reference to the plural and the other way around;
                            and{'\n'}{'\n'}
                            11.7.4 One gender includes each gender (female, male and neutral).{'\n'}{'\n'}
                            11.8  References  to  Eatmates  with  regards  to  commitments  or  liabilities  owed  to
                            Eatmates or different advantages or affirmations given to Eatmates will be considered
                            to incorporate reference additionally to any organization which is a backup undertaking
                            of Eatmates.{'\n'}{'\n'}
                            11.9 No disappointment or postponement by Eatmates to practice any privilege or cure
                            under these GSTC will be translated as a waiver of that privilege or cure nor  will any
                            single  or  halfway  exercise  of  any  privilege  or  cure  block  the  further  exercise  of  that
                            privilege  or  remedy.  No  waiver  by  Eatmates  of  any  break  of  these  GSTC  will  be
                            considered as a waiver of a former or ensuing breach. The rights and cures  given in
                            these GSTC are total and do not select any rights or cures given by law.{'\n'}{'\n'}
                            11.10 These GSTC and the records referred to in these GSTC (as for each situation
                            refreshed every once in a while) constitute the entire understanding amongst you and
                            Eatmates  administering  our  relations  and  supersede  every  single  other  assertion
                            amongst  you and  Eatmates before  the date  of  these GSTC,  which  will  stop  to  have
                            any further impact.{'\n'}{'\n'}
                            11.11 If a provision of these GSTC is held to be illicit or unenforceable, in entire or to
                            some  extent,  under  an  institution  or  administration  of  law,  it  will  to  that  extent  be
                            regarded not to shape some portion of these GSTC and the enforceability of the rest
                            of these GSTC will not be influenced.{'\n'}{'\n'}
                            11.12  Eatmates  may  speak  with  you  by  sending  an  email  to  your  enlisted  email
                            address. It requires just showing verification that the email was sent, and isn't in charge
                            of guaranteeing that you get it.{'\n'}{'\n'}
                            11.13 It is not intended that a third party should have any right to enforce these GSTC
                            pursuant to the contracts other than that Eatmates (being the wider group definition in
                            accordance with clause 11.7) may rely on and enforce these GSTC as if (in each case)
                            named in these GSTC in place of Eatmates.{'\n'}{'\n'}
                            11.14 These GSTC will be represented by and understood as per law of the land and
                            you each consent to present any debate, including question identifying with any non-
                            authoritative commitments, which may emerge out of, under, or regarding this consent
                            to the exclusive jurisdiction ward of the Federal Republic of Germany court.{'\n'}{'\n'}{'\n'}

                            {/* Privacy Policy */}
                            <Text>
                                <Text style={{ fontWeight: '600', textDecorationLine: 'underline', fontSize: 15 }}>Privacy Policy{'\n'}{'\n'}</Text>
                                This  Privacy  Policy  by  Eatmates  reveals  you  all  (guests,  hosts  and  users)  about  our  policies
                                and  procedures  regarding  the  use  of  the  Eatmates  website  or  application.  The  text  written
                                below  contains  all  the  information  of  how  and  in  what  way  will  we  extract  the  user’s
                                information.{'\n'}{'\n'}
                                We  firmly  suggest  that  you  go  through  each  and  every  line  of  Our  PRIVACY  POLICY
                                CAREFULLY. On visiting and using the services offered by Eatmates, you agree that you
                                have thoroughly read, gone through and understood, and hence are bound to all the terms
                                written in our privacy policy and terms of use of our Eatmates website and application. If
                                you do not agree to the terms written below, please exit this page and do not continue to
                                access or use the website or application, this moment onwards.{'\n'}{'\n'}
                                Eatmates provides a platform by which users may issue invitations offering to host which they
                                may accept and also the user may invite a guest to reserve their cooked food.{'\n'}{'\n'}
                                This Privacy Policy may be updated from time to time. We can update this privacy policy to
                                reflect  changes  that  we  perform  for  information  practices.  In  case  of  making  any  changes  in
                                our  privacy  policy  terms,  we  will  intimate  you  via  your  mentioned  way  or  by  means  of  a
                                notice on displayed on our website or application prior to the alterations becoming effective.
                                We suggest and request  you to  kindly review our privacy policy from time to time, and stay
                                updated with the latest information on our privacy practices.{'\n'}{'\n'}
                                As stated in the following text, the words “using” and “processing” information is inclusive of
                                using  the  cookies  on  a  computer  subjecting  to  the  data  for  factual  or  some  other  analysis  to
                                deal with data in any possible way.{'\n'}{'\n'}
                                What all sorts of information do we collect? We might pick up the information you provide us
                                at the time of registering to use our app, or when you sign up for a hosting account, post any
                                material  on  our  website  or  application,  edit  your  profile,  book  a  meal  or  request  further
                                services, and so on but is not limited to your name, address, email address, phone number and
                                if you are a user with meals to book (a Host), bank account or PayPal details, or  in case you
                                are  a  someone  who  is  willing  to  order  a  meal  (as  a  Guest)  and  you  make  a  booking  via  our
                                app,  billing  information.    We  may  ask  you  for  the  information  sponsored  by  us  when  you
                                report a problem with our website or application and can keep a record of that
                                correspondence.  You  will  also  be  asked  to  complete  the  surveys  available  on  our  website  or
                                application but you are not required to respond to them.{'\n'}{'\n'}
                                Your  particulars  of  transactions  carried  out  through  our  website  or  app  and  of  the  booking
                                fulfilment.{'\n'}{'\n'}
                                Detailed facts and info of your visits to Eatmates website or application inclusive of, but not
                                limited to, location source, traffic data, weblogs and other communication data, whether this
                                is  required  for  carrying  out  our  own  billing  purposes  or  otherwise  and  also  the  resources
                                accessed by you.{'\n'}{'\n'}
                                We may monitor and record any telephone conversation with you in order to keep a check on
                                any instruction given to us, for training purposes, crime prevention and to improve the quality
                                of our customer service.{'\n'}{'\n'}

                                1. IP Addresses{'\n'}{'\n'}
                                We  might  take  into  account  the  required  information  about  your  computer,  like  your  IP
                                address,  your PC’s operating  system,  type  of  browser  you  are  online  from,  or  to  report  any
                                aggregate  information.  This  indicates  the  required  factual  information  about  our  clients'
                                browsing activities and patterns, and does not really identify any persons.{'\n'}{'\n'}

                                2. Cookies{'\n'}{'\n'}
                                Like all other websites or application, we also use "cookies" to collect information. A cookie
                                is  nothing  but  a  tiny  information  document  that  we  exchange  with  your  PC's  hard  disk  for
                                record-keeping  purposes.  We  utilize  these  cookies  for  two  purposes.  To  start  with,  we  use
                                diligent  cookies  to  keep  a  note  of  your  login  data  for  future  logins  to  the  Site.  Second,  we
                                make  use  of  the  session  ID  cookies  for  empowering  certain  highlights  of  the  website  or
                                application,  to  better  see  how  you  associate  with  the  Site  and  to  analyze  the  total  use  by
                                Eatmates Users and traffic received on the website and application. These are not like the first
                                case  cookies,  session  cookies  are  erased  from  your  PC  as  soon  as  you  log  off  from  the  Site,
                                Application  and  Service  and  afterward  exit  from  the  browser.  Third  party  advertisers  on  the
                                Site and Application may also place or read cookies on your browser. You can instruct your
                                browser, by changing its options, to stop accepting cookies or to prompt you before accepting
                                a cookie from the websites you visit. In case that you don't acknowledge cookies, be that as it
                                may, you will be unable to utilize all segments of the Site or Application or all usefulness of
                                the Service.{'\n'}{'\n'}
                                3. How do we secure your information?{'\n'}{'\n'}
                                We actualize a variety of safety efforts to keep up the security of your personal data when you
                                put in a booking with us or submit your information. We utilize a protected server known as
                                Secure Socket Layer (SSL) technology and just encrypt into our payment gateway that gives
                                database just to be open by those approved with unique access rights to such frameworks, and
                                are required to keep the data completely private.{'\n'}{'\n'}
                                4. Do we reveal any private information to outside parties?{'\n'}{'\n'}
                                We  don't  offer,  exchange,  or  trade  to  outside  parties  your  own  personal  data.  This  does
                                exclude  confided  3rd  parties  who  help  us  in  working  our  site,  directing  our  business,  or
                                overhauling  you,  inasmuch  as  those  parties  consent  to  keep  this  data  confidential.  We  may
                                likewise clemency your data when a release becomes really necessary to agree as per the law,
                                enforce  our  site  terms,  or  safety.  In  any  case,  non-individual  identifiable  user  data  might  be
                                given  to  different  parties  for  the  purpose  of  promoting  or  publicizing  our  brand  name.  If  we
                                are under a job to share your personal data in order to comply under any legal accountability;
                                or to protect the rights, property, or safety of Eatmates, our users, or others. This incorporates
                                trading data with different organizations and associations for the purposes of fraud protection
                                and credit risk diminishment.{'\n'}{'\n'}

                                5. Changing or Deleting Your Information{'\n'}{'\n'}
                                All Members can review, update or delete their personal information through their registration
                                profile  by  contacting  us  at  contact@eatmates.com or  can  also  edit  the  relevant  part  of  their
                                profile.  If  you  want  to  cancel  your  account  with  Eatmates  you  may  contact  us  and  we  will
                                accommodate  your  request.  Please  note  that,  if  you  delete  your  Eatmates  Account,  any
                                reviews that you might  have posted by means of the Site and Application will remain freely
                                visible on the Site and Application.{'\n'}{'\n'}
                                6. Third party links{'\n'}{'\n'}
                                Periodically,  at  our  deliberation,  we  may  incorporate  or  offer  third  party  products  or  such
                                services on our site. All of the third party websites / companies have separate and independent
                                privacy  policies.  We  will  consequently  not  be  responsible  for  the  activities  linked  on  this
                                website. Nonetheless, we look to secure the integrity of our site and welcome any input about
                                these sites.{'\n'}{'\n'}

                                7. Online Privacy Policy Only{'\n'}{'\n'}
                                This online privacy policy applies to the information we collect through our website only and
                                not our offline activities/events.{'\n'}{'\n'}

                                8. Changes to our Privacy Policy{'\n'}{'\n'}
                                Any changes we may make in our privacy and cookies policy in the future will get posted on
                                the website and you must read the policies regularly.{'\n'}{'\n'}{'\n'}
                            </Text>
                            <Text>
                                <Text style={{ fontWeight: '600', textDecorationLine: 'underline', fontSize: 15 }}>Guest's Charter{'\n'}{'\n'}</Text>

                                THIS IS A LENGTHY DOC THAT CONSISTS OF VARIOUS IMPORTANT CLAUSES RELATED TO YOUR RIGHTS
                                AND DUTY. BY USING EATMATES WEBSITE OR APPLICATION , YOU ARE AGREEING TO BE OBLIGED BY{'\n'}{'\n'}
                                (i) FIRSTLY, THIS GUEST’S CHARTER AGREEMENT, {'\n'}{'\n'}(ii) SECONDLY, THE TERMS AND CONDITIONS OF THE
                                WEBSITE  OR  APPLICATION  ATTAINABLE  AT  THE  ADDRESSES WWW.EATMATES.COM,  *.EATMATES.*,
                                EATMATES MOBILE APPS ELSE KNOWN AS THE MASTER GSTC AGREEMENT.
                                We  WOULD  RECOMMEND  YOU  TO  GET  THIS  GUEST  CHARTER  COPY  PRINTED  AND  OF  THE  MASTER
                                AGREEMENT FOR YOUR FUTURE RECORDS.{'\n'}{'\n'}

                                1. Binding power of this document and of the Master Agreement
                                EATMATES  UG  is  a  Private  Limited  Liability  Company  under  the  Federal  Republic  of
                                Germany  law,  listed  under  the  number  HRB  164051  at  the  Registrar  of  Companies  for  the
                                Federal Republic of Germany (hereinafter referred to as “EATMATES”, “we”, or “us”).
                                Eatmates presents an online platforms that connects host currently across  globe who want to
                                offer food to the guests - those looking for such experiences. All these services are accessible
                                at Eatmates.{'\n'}{'\n'}
                                By using this website or application, or Services, you agree to adhere and be legally constrained
                                by the general standard terms and conditions (GSTC) of this website or application, whether
                                you  are  a  registered  user  or  not  of  these  services.  All  these  terms  you  access  and  use  of  this
                                website or application constitute a binding legal agreement between you and EATMATES.{'\n'}{'\n'}
                                We request you to please go through our privacy policies carefully at http://www.eatmates.com
                                If you do not agree to all these terms and conditions, then you don’t have any right to use this
                                website  or  application’s  services.  Stoppage  to  use  this  website  or  application  services  in
                                accordance with these terms may subject you to severe civil and criminal penalties.{'\n'}{'\n'}

                                By using the Eatmates Website or application:{'\n'}{'\n'}
                                – You agree to be restrained to the Guest’s Charter which forms a contract between you and
                                Eatmates (hereinafter referred to as the (“Guest’s Charter”);{'\n'}{'\n'}
                                – You are agreeing to be bound by the terms and conditions of Stripe, set out in the Appendix
                                (hereinafter  referred  to  as  Stripe”),  which  form  a  contract  between  yourself  and  Stripe
                                (hereinafter referred to as “Stripe Services Agreement”;{'\n'}{'\n'}
                                – By using this website or application you are accepting to be bound by the Master Agreement.
                                We  would  request  you  to  first  read  our  GSTC  Agreement  thoroughly  again.  Both  the  GSTC
                                Agreement and The Guest Charter form a contract when you agree to use the Eatmates website
                                or application.  In the event of a  contradiction between a stipulation in the GSTC Agreement
                                and a stipulation in the Guest’s Charter, the stipulation in the Guest’s Charter shall prevail. If
                                you do not agree to be pledged by the Guest’s Charter, you are not allowed to use the Eatmates
                                Website or application as a Guest.{'\n'}{'\n'}

                                2. The Tenancy of a User’s Account{'\n'}{'\n'}
                                To  become  a  Guest  of  Eatmates  website  or  application  you  first  got  to  sign  up  and  make  a
                                “User’s  Account”.  This  can  be  done  by  filling  out  the  available  form  under  Create  account
                                column.  Enter  all  the  details  with  utmost  attention,  including  your  first  name,  family  name,
                                email address and so on. The creation of a User’s Account automatically includes the creation
                                of an “Account” with Stripe, as set out in the Terms and Conditions of Stripe. We would advise
                                you  to  further  read  the  Master  Agreement  and  the  Terms  and  Conditions  of  Stripe  for  more
                                information. You are required to provide a profile photo that represents you. By uploading such
                                a  photograph,  you  guarantee  to  Eatmates  that  this  does  not infringe  any  intellectual  property
                                rights belonging to a third party and give authorization to Eatmates to use your profile photo
                                and also provide a license to use it under the conditions set out in GSTC Agreement. You are
                                required to provide the accurate and exact information and keep it updated.{'\n'}{'\n'}

                                3. The Eatmates Invitations offered to you{'\n'}{'\n'}
                                Eatmates Invitations on the Eatmates Website or application are defined and submitted by the
                                “Hosts” (as the term defined in the GSTC Agreement). We advise you to thoroughly read this
                                Charter in detail before accepting Eatmates invitation and also contact the Host if you have any
                                doubt or questions. Kindly do not accept any Eatmates Invitation just like that if you have any
                                doubts  or  questions  in  your  mind.  We  would  also  advise  you  to  read  in  detail  the  GSTC
                                Agreement to quickly understand how our commission is calculated, what all safety measures
                                we use while receiving payments from you and the calculations of host proportions.{'\n'}{'\n'}

                                4. Your obligations as a Guest{'\n'}{'\n'}
                                4.1. Principles of openness, respect, tolerance and non-discrimination
                                The “Eatmates Service” (as the term is defined in the GSTC Agreement) is designed to ease
                                your meeting with the one or several people from different communities over your meal. Via
                                this service, you can visit a Host’s home, possibly in the presence of other Guests. You are
                                required  to  respect  your  host  as  well  as  their  respective  culture.  You  agree  to  follow  all  the
                                households’ rules of your host, such as removing your shoes in particular, when asked to do so
                                by your Host. List without being exhaustive, shouldn’t at any cost violate your integrity under
                                any circumstance.{'\n'}{'\n'}

                                4.2. Your obligation to respect the hospitality offered to you
                                The most important quality in a Guest is to respect the hospitality offered by their Host. You
                                are required to not enter any other premises of the house other than shown to you by your host.
                                You also agree not to get involved with your host’s property in any case. You agree to accept
                                and respect the presence of other people in the premises, including any family member or any
                                other  guest  like  you.  You  agree  to  accept  and  respect  the  presence  of  animals  as  described,
                                where applicable, in the accepted Eatmates Invitation. You state and guarantee that you are not
                                allergic  to  the  animals  and  will  not  damage  any  of  the  premises  of  your  hosts  including  the
                                building, furniture or things around the premises.{'\n'}{'\n'}

                                4.3. Your acceptance of the event you booked
                                You  agree  to  provide  your  host  with  a  prior  notice  when  you  accept  the  Eatmates  invitation
                                with all the details specifying to any foods or drinks that you are allergic and refused to drink
                                for  whatever  reason.  You  agree  to  not  accept  any  Eatmates  Invitation  without  the  prior
                                confirmation from your host. In the event that you should accept a Eatmates Invitation without
                                having obtained prior confirmation from your Host, or in the knowledge of the presence in the
                                composition of the meals offered of one or several of these foods and/or drinks, then the amount
                                requested by the Host and our commission, including tax, shall remain payable. You cannot ask
                                any of the dishes to be replaced by another and you are required to eat food and drinks at your
                                own risk. You guarantee to us on this matter that we will not be held responsible in any such
                                circumstances.{'\n'}{'\n'}

                                4.4. Your obligation to leave your Host once the invitation and food experience
                                are finished
                                The  invitation  and  food  experience  are  not  required  to  last  more  than  four  hours.  We
                                automatically  and  without  discrimination  refuse  any  Eatmates  Invitation  of  an  estimated
                                duration superior to four hours. You agree to leave the premises at the request of your Host and
                                in all cases upon expiry of the maximum duration estimated by the Eatmates Invitation as stated
                                by  the  Host  on  the  Eatmates  Website  or  application.  You  agree  to  take  your  responsibility
                                during the event of claim by the third party or by your host.{'\n'}{'\n'}

                                4.5. Respect for neighbors and other members of your Host’s household
                                You agree to respect your Host’s neighbors and are required to behave properly without creating
                                any nuisance during your course of Eatmates Invitation. Under no circumstances, we will held
                                responsible in case you do not respect the obligation. You agree to take personal responsibility
                                in the event of a claim by a third party in the event that you do not respect this obligation.{'\n'}{'\n'}

                                4.6. Respect for the contract to which you are agreeing
                                The definition and publication on the Eatmates Website or application of Eatmates Invitation
                                constitute  a  pre-contractual  offer.  If  you  are  interested  in  Eatmates  Invitation  presented  by  a
                                Host, you can directly ask the Host if they are ready to host you as a guest immediately after
                                the  confirmation  of  the  request.  In  the  event  of  you  accepted  by  your  host  as  a  guest,  a  pre-
                                contractual will become a contractual offer. In the event of the acceptance of their contractual
                                offer before the date of the Eatmates Invitation offered, a contract shall be made between you
                                and  the  Host.  The  contractual  offer  will  automatically  become  null  and  void  if  you  failed  to
                                accept it. In any event, your Host’s offer will close early as soon as the number of Guests having
                                accepted  said  Eatmates  Invitation  shall  be  equal  to  the  stated  maximum.  The  terms  and
                                conditions of this Guest-Host Contract are constituted by the terms and conditions defined in
                                Eatmates  Invitation  as  well  as,  where  applicable,  the  terms  of  any  agreements  that  you  may
                                have made during direct exchanges with the Host, whether these agreements were made via the
                                Eatmates website or application or not. You agree to respect the terms and conditions of this
                                Guest-Host Contract. In case you are not able to attend the Eatmates Invitation, the total amount
                                paid by the guest including all the taxes remain payable as well as our commission. In the event
                                of any dispute between  you and your Host due to a failure by one of these parties to honour
                                their contractual obligations, Eatmates will not be held responsible.{'\n'}{'\n'}

                                4.7. Respect for the regulations that apply to you
                                We advise you to make yourself familiar with the regulations, whether fiscal, administrative,
                                or of any other nature, that may apply to you. You agree to respect any regulations governing
                                the premises where Eatmates Invitation takes place.{'\n'}{'\n'}

                                5. Responsibility{'\n'}{'\n'}
                                Under no circumstances shall we be held responsible in the event that you should fail to respect
                                all or any of the above mentioned obligations. You agree to make any claim by your Host, or
                                by other Guests, your own personal responsibility in the event that you should fail to respect
                                your obligations and you guarantee us against any recourse from your Host and/or from other
                                Guests  in  this  respect.  Except  as  provided  in  the  terms  and  conditions  of  the  EATMATES
                                website or application, the EATMATES guest’s charter and the EATMATES host’s charter (for
                                more  information,  please  contact contact@eatmates.com),  we  are  not  responsible  for  any
                                damage or harm resulting from your EATMATES invitation.{'\n'}{'\n'}
                                6. Risks related to being a Guest{'\n'}{'\n'}
                                You acknowledge and accept the risks that come with being a guest. The risk includes that one
                                of the other Guests might break or damage your property; or that your Host and/or one of the
                                other Guests may be sick and infect you; the risk that your Host and/or one of the other Guests
                                may divulge or use personal information communicated to them by you, for purposes other than
                                the Eatmates Invitation. You understand that Eatmates shall not be held responsible for any of
                                such risks. You agree that the amount requested by the host including our commission and tax
                                will not be refunded to you in case you don’t go to your host’s home. Apart from that, you also
                                give your consent about not going to you Host’s home in the event that you may risk infecting
                                Host and/or other guests.{'\n'}{'\n'}

                                7. Photographs published by the Host{'\n'}{'\n'}
                                You  acknowledge  that  photographs  published  by  the  Host  may  not  represent  the  food
                                experience  that  will  be  offered  to  you  during  the  Eatmates  Invitation.  Therefore,  it  is  very
                                important for you as a Guest to share the one time password (OTP) for the particular event only
                                if you are convinced you have been offered what you reserved. In any circumstances of doubt
                                you are recommended to cancel the event immediately and report to Eatmates immediately. Our
                                claims service can be contacted: - By email at the following address: contact@eatmates.com{'\n'}{'\n'}
                                8. Modification of the Guest’s Charter{'\n'}{'\n'}
                                This Guest’s Charter is a membership agreement that can only be modified by and at the sole
                                discretion of Eatmates. Eatmates reserves the right to modify this Guest’s Charter at any time.
                                Any  modification  of  this  charter  will  come  into  force  once  it  is  published  on  the  Eatmates
                                Website or application and you will be notified immediately by email you have registered with
                                us while creating your account. By continuing to use the Eatmates Website or application as a
                                Guest,  you  agree  to  be  bound  by  the  modified  Guest’s  Charter.  If  you  do  not  accept  the
                                modifications  that  we  might  have  made,  you  may  no  longer  use  the  Eatmates  Website  or
                                application as a Guest and you are obliged to stop accepting Eatmates Invitations.{'\n'}{'\n'}

                                9. Eligibility{'\n'}{'\n'}
                                You declare and guarantee to us that you are over 18 years of age and have the legal capability
                                to enter into our contract. Use of the Eatmates Website or application as a Guest is considered
                                to be null and void if you violate any of the rules of this charter. By using the Eatmates website
                                or application as a guest, you declare and guarantee to us that the use of Eatmates website or
                                application by you does not infringe any current law or regulation.{'\n'}{'\n'}

                                10. Exclusion – Withdrawal of access to the Eatmates Website or application{'\n'}{'\n'}
                                Without prejudice to its right to make a claim against you and/or to demand compensation for
                                damages,  Eatmates  reserves  the  right  to  withdraw  your  access  to  the  Eatmates  Website  or
                                application,  unilaterally  and  without  prior  notice,  in  the  event  of  failure  to  comply  with  this
                                Guest’s Charter.{'\n'}{'\n'}

                                11. Governing law{'\n'}{'\n'}
                                Eatmates  is  subject  to  the  federal  republic  of  Germany  law.  All  guest  should  firmly  comply
                                with the governing law of their particular country of hosting.{'\n'}{'\n'}



                                12. Competent jurisdiction – clause conferring jurisdiction{'\n'}{'\n'}
                                These GSTCs shall be governed by and constructed in consonance with the federal republic of
                                Germany  law  and  you  also  agree  to  submit  any  dispute  including  any  non-contractual
                                obligations  to  Eatmates  in  agreement  to  the  exclusive  jurisdiction  of  the  federal  republic  of
                                Germany Courts.{'\n'}{'\n'}
                                13. Peaceful resolution of disputes{'\n'}{'\n'}
                                Our host are to offer only the best service and to make their facilities clean and available at all
                                times. We know however that sometimes plans can change or things don't go entirely to plan,
                                so we have made our refund process as simple as possible. If something about your experience
                                with  our  hosts  doesn't  meet  your  expectations,  please  visit  our contact  us page  and  someone
                                will be in touch with you.{'\n'}{'\n'}
                                Before undertaking any legal action in any of such dispute we would suggest you to contact us
                                and we will try to resolve your issue peacefully.{'\n'}{'\n'}
                                Our claims service can be contacted:
                                - By email at the following address: contact@eatmates.com{'\n'}{'\n'}

                                If you have any questions about this Guests Charter, please contact us at contact@eatmates.com{'\n'}{'\n'}
                                15. Index of the definitions used in this Guest’s Charter{'\n'}{'\n'}
                                As a Guest, We want you to enjoy your experience with our hosts. We want you to be and feel
                                safe and vice versa, to experience a memorable and homely environment, and to go back with
                                great memories to last a lifetime. To that end, we've created a guest charter to ensure every step
                                of the Eatmates experience is as smooth as possible.{'\n'}{'\n'}
                                The following terms that are described in both the singular and plural in this charter are defined
                                in the GSTC Agreement, also used in the following articles of this Guest’s Charter.{'\n'}{'\n'}{'\n'}

                            </Text>
                            <Text>
                                <Text style={{ fontWeight: '600', textDecorationLine: 'underline', fontSize: 15 }}>Hosts Charter{'\n'}{'\n'}</Text>


                                THIS IS A LONG SET OF CREDENTIALS CONSISTING OF VARIOUS IMPORTANT CAUSES THAT PRESENTS
                                YOUR RIGHTS AND OBLIGATIONS. ON OPERATING THIS SITE AND TAKING BENEFITS OF THE SERVICES
                                OFFERED BY EATMATES, YOU ARE AGREE TO: {'\n'}{'\n'}(i) FIRSTLY, THIS  HOST’S CHARTER, {'\n'}{'\n'}(ii) SECONDLY, THE
                                TERMS AND CONDITIONS OF THE WEBSITE OR APPLICATION ACCESSIBLE AT THE ADDRESSES
                                WWW.EATMATES.COM, *.EATMATES.*, BECOMING THE MEMBER OF OUR WEBSITE OR APPLICATION
                                WILL  ALSO  LEAD  YOU  TO  GENERAL  STANDARD  TERMS  AND  CONDITIONS  AGREEMENT.  WE  WOULD
                                ADVISE YOU TO PRINT A COPY OF THIS HOST’S CHARTER AND OF THE GENERAL STANDARD TERMS
                                AND CONDITIONS AGREEMENT FOR YOUR FUTURE RECORDS.{'\n'}{'\n'}
                                1. Binding power of this document and of the General Standard Terms and Conditions
                                Agreement{'\n'}{'\n'}
                                EATMATES  UG  is  a  Private  Limited  Liability  Company  under  the  Federal  Republic  of
                                Germany  law,  listed  under  the  HRB  164051  at  the  Registrar  of  Companies  for  the  Federal
                                Republic of Germany (hereinafter referred to as “EATMATES”, “we”, or “us”).{'\n'}{'\n'}
                                Eatmates presents an online platforms that connects host currently across  globe who want to
                                offer food to the guests - those looking for such experiences. All these services are accessible
                                at Eatmates.{'\n'}{'\n'}
                                When you choose to use the services of Eatmates at the end of this host’s charter, it show your
                                acceptance to the following, you are agreeing to:{'\n'}{'\n'}
                                -  be constrained by our policies which form a contract between you and Eatmates.
                                - You are agreeing to be bound by the terms and conditions of Stripe, set out in the Appendix
                                (hereinafter  referred  to  as  Stripe”),  which  form  a  contract  between  yourself  and  Stripe
                                (hereinafter referred to as “Stripe Services Agreement”; and
                                - be bound by our General Standard Terms and Conditions Agreement.{'\n'}{'\n'}

                                We  would  advise  you  to  thoroughly  read  the  General  Standard  Terms  and  Conditions
                                Agreement again.{'\n'}{'\n'}
                                The  General  Standard  Terms  and  Conditions  Agreement  and  the  Host’s  Charter forms  a
                                contract between you and Eatmates by which accept to be bound by our policies when you use
                                the Eatmates Website or Application.{'\n'}{'\n'}
                                The stipulation of Host’s Charter shall prevail in contradiction between stipulation in the
                                General Standard Terms and Conditions Agreement and the Host Charter.{'\n'}{'\n'}
                                If you do not agree to be bound by the Host’s Charter, you are not allowed to use the Eatmates
                                Website as a Host.{'\n'}{'\n'}
                                2. Objective of the Host’s Charter{'\n'}{'\n'}
                                This Host’s Charter is aimed to regulate your rights and obligations more specifically in the
                                event you decide to use the Eatmates Service as a host.{'\n'}{'\n'}
                                3. The Tenancy of a User Account{'\n'}{'\n'}
                                To become a Host, you are required to create a “Users Account” as defined  in  the  General
                                Standard  Terms  and  Conditions  Agreement  and  complete  it  by  providing  all  the  relevant
                                information as described below:{'\n'}{'\n'}
                                - Host’s DOB.{'\n'}
                                - Gender of the Host.{'\n'}
                                - Exact postal address.{'\n'}
                                - A clear profile picture – front facing, representing host.{'\n'}
                                - Nationality.{'\n'}
                                - The languages you can comfortably speak.{'\n'}{'\n'}
                                The creation of a User Account automatically includes the creation of an “Account” with
                                Stripe , as set out in the Terms and Conditions of Stripe.{'\n'}{'\n'}
                                We would advise you to read the Master Agreement and the Terms and Conditions of Stripe
                                for further information on this subject.{'\n'}{'\n'}
                                You are required to provide a profile photo that represents you as a host. By uploading such a
                                photograph,  you  guarantee  to  Eatmates  that  this  does  not  infringe  any  intellectual  property
                                rights belonging to a third party and give authorization to Eatmates to use your profile photo
                                and also provide license to use it under the conditions set out in General Standard Terms and
                                Conditions  Agreement.  You  are  required  to  provide  the  accurate  and  exact  information  and
                                keep it updated and also grant a license to Eatmates to use it under the conditions set out in the
                                General Standard Terms and Conditions Agreement.{'\n'}{'\n'}
                                4. Definition of your Eatmates Invitations{'\n'}{'\n'}
                                As a host, you become responsible for defining Eatmates invitation precisely.
                                Your Eatmates Invitation will get validated on the Eatmates Website or application as soon as
                                the following required information has been supplied related to the Eatmates Invitation:{'\n'}{'\n'}
                                - The date and start and end times for the Eatmates Invitation.{'\n'}
                                - The postal (physical) address of the chosen location.{'\n'}
                                -  The  format  of  the  meal;  the  structure  of  the  menu;  the  approximate  length  of  the  hosting
                                period.{'\n'}
                                - One or distinct type of photographs of the dishes that you will offer along with a photograph
                                of the location choose for the Eatmates Invitation.{'\n'}
                                - The likelihood of the presence of animals.{'\n'}
                                - The maximum number of Guests that you are offering to invite.{'\n'}
                                -  The  amount  payable  by  each  Guest,  our  commission  will  be  added  to  this  amount,  tax
                                included.{'\n'}{'\n'}
                                We would advise you to first consult the General Standard Terms and Conditions Agreement
                                to calculate our part of commission and the kind of payment method we use.
                                Eatmates carries out a minimal check required for the information supplied before validation
                                and publication of the Eatmates website or application.{'\n'}{'\n'}
                                5. Your accountability as a Host{'\n'}{'\n'}
                                5.1. Principles of openness, respect, tolerance and non-discrimination{'\n'}{'\n'}
                                The “Eatmates Application” is devised to facilitate your meeting with one many people from
                                different communities across world as defined in the General Standard Terms and Conditions
                                Agreement.{'\n'}{'\n'}
                                Via this application you will invite the guest to reserve your cooked food and may be they can
                                be much different than you which you may find repulsive.{'\n'}{'\n'}
                                You agree to respect your Guests and their respective cultures and are required to treat them
                                with honor.{'\n'}{'\n'}
                                5.2. Your obligation to offer hospitality{'\n'}{'\n'}
                                The most essential part of being a to have a welcoming nature
                                You  agree  to  receive  the  Guests  in  premises  which  you  are  legally  entitled  to  use,  either  as
                                owner or as tenant.{'\n'}{'\n'}
                                You agree to ensure that the premises in which you will be receiving your Guests have sufficient
                                space and at least present a minimum level of safety for the guest.{'\n'}{'\n'}
                                In particular, you guarantee the physical security of your Guests in the premises.{'\n'}{'\n'}
                                5.3. The food experience that you offer{'\n'}{'\n'}
                                You  agree  to  be  very  precise  and  clear  about  the  quality  of  your  meal  and  in  describing  the
                                complete information as requested by the guest on our Eatmates website or application.{'\n'}{'\n'}
                                You agree to respect your guest’s dietary restrictions that would be informed to you in advance.
                                You agree to provide your Guests with healthful and hygienic food and drinks.{'\n'}{'\n'}
                                In particular, you guarantee the physical safety of your Guests and the quality of food and drinks
                                provided to them.{'\n'}{'\n'}
                                You agree to participate in the food experience that you offer.{'\n'}{'\n'}
                                5.4. Ending of your time as Host and of the invitation and meal{'\n'}{'\n'}
                                Under  no  circumstances  your  invitation  and  food  experience  with  your  guest  should  last  for
                                more than four hours.{'\n'}{'\n'}
                                For  safety  reasons  and  some  other  predefined  protocols,  we  would  automatically  refuse  the
                                Eatmates  invitation  if  it  presumes  of  lasting  for  more  than  four  hours.  Therefore,  it  is  very
                                important for you as a Host to enter the one time password (OTP) for the particular event in the
                                Eatmates application within four hours of your start of the event. You must not start the event
                                before asking for the OTP from your guest.{'\n'}{'\n'}
                                5.5. Respect for your neighbors and other members of your household{'\n'}{'\n'}
                                You agree not to offer Eatmates Invitations that would be contrary to any regulations governing
                                your household or tenancy.{'\n'}{'\n'}
                                You  agree  to  respect  your  neighbors  by  not  creating  any  nuisance  and  make  sure  that  your
                                neighbors should not suffer in any case from your end or mistake during Eatmates Invitation
                                5.6. Respect for the contract which you are offering{'\n'}{'\n'}
                                The definition and publication of the Eatmates Invitation on the Eatmates website or application
                                substitutes a pre-contractual invitation.{'\n'}{'\n'}
                                In  the  event  in  which  you  accept  the  user  as  your  guest  the  pre-contractual  offer  will
                                automatically become a contractual offer.{'\n'}{'\n'}
                                In the event of the acceptance of their contractual offer before the date of the Eatmates Invitation
                                offered (the “GSTC”), a contract shall be made between you and Eatmates. If you fail to accept
                                the contractual offer in any case than it will become null and void.{'\n'}{'\n'}
                                If one or more Guests accept your offer of Eatmates Invitation, a contract will be automatically
                                formed between you and the guest who agreed to accept your Eatmates Invitation.{'\n'}{'\n'}
                                In any event, your ongoing offer will close the moment it hits the number of Guests accepting
                                your Eatmates Invitation equals to your stated maximum.{'\n'}{'\n'}
                                You agree to respect the terms and conditions of this Guest-Host Contract.{'\n'}{'\n'}
                                Eatmates will not be responsible for any disputes happen between you and any other guest.{'\n'}{'\n'}
                                In  any  of  the  unlikely  event  that  happened  during  the  Eatmates  Invitation  you  will  agree  to
                                compensate with Eatmates for any damage that may suffer as a result as specified in the guest-
                                host contract.{'\n'}{'\n'}
                                5.7. Respect for the regulations that apply to you{'\n'}{'\n'}
                                We advise you to make yourself familiar with the regulations, whether fiscal, administrative,
                                or of any other nature, that may apply to you.{'\n'}{'\n'}
                                You agree, to respect any kind of regulations governing the premises of the Eatmates Invitation.{'\n'}{'\n'}
                                You  agree  not  to  offer  or  to  serve  alcoholic  drinks  during  Eatmates  Invitation  except  in
                                accordance with the relevant regulations. The abuse of alcohol is a danger to health. Licensed
                                premises  are  subject  to  particular  regulation  and  failure  to  comply  is  subject  to  criminal
                                penalties.{'\n'}{'\n'}
                                You agree not to draw a professional income from Eatmates Invitation. Professional income is
                                subject to tax and other specific regulations. you agree to observe the fiscal and tax regulation
                                you are in.{'\n'}{'\n'}
                                In addition you agree:{'\n'}{'\n'}
                                - To welcome Guests solely to your own home.{'\n'}
                                -  Where  applicable,  to  obey  any  household  regulations  that  govern  the  premises  where  the
                                Eatmates Invitation takes place.{'\n'}
                                - To not accept unexpected visitors during Eatmates Invitation.{'\n'}
                                - Not to offer different menus other than defined in the Eatmates Invitation.{'\n'}
                                - To receive your Guests around a single table at which you will join them.{'\n'}
                                -  To  respect  hygiene  and  cleanliness  regulations  relating  to  the  premises,  food,  and  drinks
                                offered during Eatmates Invitation.{'\n'}{'\n'}
                            </Text>

                        </Text>


                    ) }


                    <TouchableOpacity onPress={() => setShow(!show)}>
                        <Text style={styles.textContMore}>
                            {!setShow ?  'Read less':'Learn more' }
                        </Text>
                    </TouchableOpacity>
                    <Text style={styles.textCont}>
                        I agree to treat everyone in the Eatmates community - regardless of their race, religion, national origin, ethnicity, disability, sex, gender identity, sexual orientation, or age - with respect, and without judgement or bias.
                    </Text>
                </View>
                <View style={styles.bottom}>
                    <Custombutton text={'Next'} onPress={() => nextBtnPressed()} />
                </View>
                {/* <Modal
                    visible={showoptiontwo}
                    onRequestClose={
                        () => setShowoptiontwo(false)
                    }
                    transparent
                >
                    <View style={styles.optContView}>
                        <View style={styles.optCont}>
                            <View style={styles.optContTitle}>
                                <Text style={styles.optContTitleText} >Select Option</Text>
                            </View>
                            <TouchableOpacity onPress={() => openCameraBack()}>
                                <Text style={styles.textColor}> Camera</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => openGalleryBack()} >
                                <Text style={styles.textColor}> Gallery</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setShowoptiontwo(false)} >
                                <Text style={styles.textColor}> Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal> */}
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    root: {
        backgroundColor: '#fff',
        padding: 28,
        paddingBottom: 300
    },
    heading: {
        paddingTop: 32,
        paddingBottom: 12
    },
    imgCont: {
        width: 310,
        height: 310,
        // paddingBottom: 80
    },
    imgView: {
        paddingBottom: 25
    },
    textCont: {
        fontSize: 14,
        marginTop: 6
    },
    textContMore: {
        fontWeight: '600',
        fontSize: 14,
        marginBottom: 6,
        color: '#187498'
    },
    bottom: {
        marginTop: 35,
        paddingBottom: 40
    }

})

export default Beforebegin