import {
  Text,
  Heading,
  Stack,
  Center,
  List,
  ListItem,
  Link,
} from "@chakra-ui/react";
import DecoratedText from "../components/DecoratedText";


export default async function PrivacyPolicy() {
  return (
    <Stack backgroundImage="url('https://pics.narutostorm.com/new_bg.png')" bgSize="cover" color="rgb(142, 53, 28)">
      <Center>
        <Stack pr="30px">
          <Heading p="30px" fontSize="5xl">
            <DecoratedText>Privacy Policy</DecoratedText>
          </Heading>
          <Text pl="30px" color="rgb(142, 53, 28)" maxW="1200px">
            This Privacy Policy describes our policies and procedures on the
            collection, use and disclosure of your information when you use the
            service and tells you about your privacy rights and how the law
            protects you. We use your personal data to provide and improve the
            service. By using the service, you agree to the collection and use
            of information in accordance with this privacy policy.
          </Text>
          <Heading p="30px" fontSize="4xl">
            Interpretation and Definitions
          </Heading>
          <Heading pl="30px" fontSize="2xl">
            Interpretation
          </Heading>
          <Text pl="30px" color="rgb(142, 53, 28)" maxW="1200px">
            The words of which the initial letter is capitalized have meanings
            defined under the following conditions. The following definitions
            shall have the same meaning regardless of whether they appear in
            singular or in plural.
          </Text>
          <Heading pl="30px" fontSize="2xl">
            Definitions
          </Heading>
          <Text pl="30px" color="rgb(142, 53, 28)" maxW="1200px">
            For the purposes of this privacy policy:
          </Text>
          <List
            pl="40px"
            color="rgb(142, 53, 28)"
            maxW="1200px"
            spacing={3}
            styleType="disc"
          >
            <ListItem marginLeft="45px">
              <Text as="span" fontWeight="bold">
                Account
              </Text>{" "}
              means a unique account created for You to access our Service or
              parts of our service.
            </ListItem>
            <ListItem marginLeft="45px">
              <Text as="span" fontWeight="bold">
                Affiliate
              </Text>{" "}
              means an entity that controls, is controlled by or is under common
              control with a party, where "control" means ownership of 50% or
              more of the shares, equity interest or other securities entitled
              to vote for election of directors or other managing authority.
            </ListItem>
            <ListItem marginLeft="45px">
              <Text as="span" fontWeight="bold">
                Device
              </Text>{" "}
              means any device that can access the Service such as a computer, a
              cellphone or a digital tablet.
            </ListItem>
            <ListItem marginLeft="45px">
              <Text as="span" fontWeight="bold">
                Personal Data
              </Text>{" "}
              is any information that relates to an identified or identifiable
              individual.
            </ListItem>
            <ListItem marginLeft="45px">
              <Text as="span" fontWeight="bold">
                Service
              </Text>{" "}
              refers to the application.
            </ListItem>
            <ListItem marginLeft="45px">
              <Text as="span" fontWeight="bold">
                Service Provider
              </Text>{" "}
              means any natural or legal person who processes the data on behalf
              of the company. It refers to third-party companies or individuals
              employed by the company to facilitate the service, to provide the
              service on behalf of the company, to perform services related to
              the service or to assist the company in analyzing how the service
              is used.
            </ListItem>
            <ListItem marginLeft="45px">
              <Text as="span" fontWeight="bold">
                Usage Data
              </Text>{" "}
              refers to data collected automatically, either generated by the
              use of the service or from the service infrastructure itself (for
              example, the duration of a page visit).
            </ListItem>
            <ListItem marginLeft="45px">
              <Text as="span" fontWeight="bold">
                You
              </Text>{" "}
              means the individual accessing or using the service, or the
              company, or other legal entity on behalf of which such individual
              is accessing or using the service, as applicable.
            </ListItem>
          </List>
          <Heading p="30px" fontSize="4xl">
            Collecting and Using Your Personal Data
          </Heading>
          <Heading pl="30px" fontSize="3xl">
            Types of Data Collected
          </Heading>
          <Heading pl="30px" fontSize="2xl">
            Usage Data
          </Heading>
          <Text pl="30px" color="rgb(142, 53, 28)" maxW="1200px">
            Usage Data is collected automatically when using the Service.
          </Text>
          <Text pl="30px" color="rgb(142, 53, 28)" maxW="1200px">
            Usage Data may include information such as your device's internet
            protocol address (e.g. IP address), browser type, browser version,
            the pages of our service that you visit, the time and date of your
            visit, the time spent on those pages, unique device identifiers and
            other diagnostic data. When you access the service by or through a
            mobile device, we may collect certain information automatically,
            including, but not limited to, the type of mobile device You use,
            your mobile device unique ID, the IP address of your mobile device,
            your mobile operating system, the type of mobile internet browser
            you use, unique device identifiers and other diagnostic data.
          </Text>
          <Text pl="30px" color="rgb(142, 53, 28)" maxW="1200px">
            We may also collect information that your browser sends whenever you
            visit our service or when you access the service by or through a
            mobile device.
          </Text>
          <Heading pl="30px" fontSize="2xl">
            Information Collected while Using the Application
          </Heading>
          <Text pl="30px" color="rgb(142, 53, 28)" maxW="1200px">
            While using our application, in order to provide features of our
            application, we may collect:
          </Text>
          <List
            pl="40px"
            color="rgb(142, 53, 28)"
            maxW="1200px"
            spacing={3}
            styleType="disc"
          >
            <ListItem marginLeft="45px">
              Device or Other Identifiers
              <List styleType="circle" marginLeft="50px">
                <ListItem>
                  We use this information to provide features of our service, to
                  improve and customize our service. The information may be
                  uploaded to the company's servers and/or a service provider's
                  server or it may be simply stored on your device.
                </ListItem>
                <ListItem>
                  You can enable or disable access to this information at any
                  time, through your device settings.
                </ListItem>
                <ListItem>
                  The app does use third-party services that may collect
                  information used to identify you.
                </ListItem>
              </List>
            </ListItem>
            <ListItem marginLeft="45px">
              <Link href="https://policies.google.com/privacy">
                Google Play Services
              </Link>
            </ListItem>
            <ListItem marginLeft="45px">
              <Link href="https://legal.branch.io/#branchio-privacypolicy">
                Branch Service
              </Link>
            </ListItem>
          </List>
          <Heading p="30px" fontSize="3xl">
            Use of Your Personal Data
          </Heading>
          <Text pl="30px" color="rgb(142, 53, 28)" maxW="1200px">
            The Company may use personal data for the following purposes:
          </Text>
          <List
            pl="40px"
            color="rgb(142, 53, 28)"
            maxW="1200px"
            spacing={3}
            styleType="disc"
          >
            <ListItem marginLeft="45px">
            <Text as="span" fontWeight="bold">To provide and maintain our service</Text>, including to monitor the
              usage of our service.
            </ListItem>
            <ListItem marginLeft="45px"><Text as="span" fontWeight="bold">App Functionality</Text></ListItem>
            <ListItem marginLeft="45px"><Text as="span" fontWeight="bold">Analytics</Text></ListItem>
            <ListItem marginLeft="45px"><Text as="span" fontWeight="bold">Advertising or Marketing</Text></ListItem>
            <ListItem marginLeft="45px"><Text as="span" fontWeight="bold">Personalization</Text></ListItem>
          </List>
          <Text pl="30px" color="rgb(142, 53, 28)" maxW="1200px">
            We may share Your personal information in the following situations:
          </Text>
          <List
            pl="40px"
            color="rgb(142, 53, 28)"
            maxW="1200px"
            spacing={3}
            styleType="disc"
          >
            <ListItem marginLeft="45px">
            <Text as="span" fontWeight="bold">With Service Providers</Text>: We may share your personal information
              with service providers to monitor and analyze the use of our
              service, to contact you.
            </ListItem>
            <ListItem marginLeft="45px">
            <Text as="span" fontWeight="bold">For business transfers</Text>: We may share or transfer your personal
              information in connection with, or during negotiations of, any
              merger, sale of company assets, financing, or acquisition of all
              or a portion of our business to another company.
            </ListItem>
            <ListItem marginLeft="45px">
            <Text as="span" fontWeight="bold">With Affiliates</Text>: We may share your information with our
              affiliates, in which case we will require those affiliates to
              honor this privacy policy. Affiliates include our parent company
              and any other subsidiaries, joint venture partners or other
              companies that We control or that are under common control with
              us.
            </ListItem>
            <ListItem marginLeft="45px">
            <Text as="span" fontWeight="bold">With business partners</Text>: We may share your information with our
              business partners to offer you certain products, services or
              promotions.
            </ListItem>
            <ListItem marginLeft="45px">
            <Text as="span" fontWeight="bold">With other users</Text>: when you share personal information or otherwise
              interact in the public areas with other users, such information
              may be viewed by all users and may be publicly distributed
              outside.
            </ListItem>
            <ListItem marginLeft="45px">
            <Text as="span" fontWeight="bold">With Your consent</Text>: We may disclose your personal information for
              any other purpose with your consent.
            </ListItem>
          </List>
          <Heading p="30px" fontSize="3xl">
            Retention of Your Personal Data
          </Heading>
          <Text pl="30px" color="rgb(142, 53, 28)" maxW="1200px">
            The Company will retain your personal data only for as long as is
            necessary for the purposes set out in this privacy policy. We will
            retain and use your personal data to the extent necessary to comply
            with our legal obligations (for example, if we are required to
            retain your data to comply with applicable laws), resolve disputes,
            and enforce our legal agreements and policies.
          </Text>
          <Text pl="30px" color="rgb(142, 53, 28)" maxW="1200px">
            The Company will also retain usage data for internal analysis
            purposes. Usage Data is generally retained for a shorter period of
            time, except when this data is used to strengthen the security or to
            improve the functionality of our service, or we are legally
            obligated to retain this data for longer time periods.
          </Text>
          <Heading p="30px" fontSize="3xl">
            Transfer of Your Personal Data
          </Heading>
          <Text pl="30px" color="rgb(142, 53, 28)" maxW="1200px">
            Your information, including personal data, is processed at the
            company's operating offices and in any other places where the
            parties involved in the processing are located. It means that this
            information may be transferred to — and maintained on — computers
            located outside of your state, province, country or other
            governmental jurisdiction where the data protection laws may differ
            than those from your jurisdiction.
          </Text>
          <Text pl="30px" color="rgb(142, 53, 28)" maxW="1200px">
            Your consent to this privacy policy followed by your submission of
            such information represents your agreement to that transfer.
          </Text>
          <Text pl="30px" color="rgb(142, 53, 28)" maxW="1200px">
            The Company will take all steps reasonably necessary to ensure that
            Your data is treated securely and in accordance with this privacy
            policy and no transfer of your personal data will take place to an
            organization or a country unless there are adequate controls in
            place including the security of your data and other personal
            information.
          </Text>
          <Heading p="30px" fontSize="3xl">
            Disclosure of Your Personal Data
          </Heading>
          <Heading pl="30px" fontSize="2xl">
            Business Transactions
          </Heading>
          <Text pl="30px" color="rgb(142, 53, 28)" maxW="1200px">
            If the company is involved in a merger, acquisition or asset sale,
            your personal data may be transferred. We will provide notice before
            your personal data is transferred and becomes subject to a different
            privacy policy.
          </Text>
          <Heading pl="30px" fontSize="2xl">
            Law enforcement
          </Heading>
          <Text pl="30px" color="rgb(142, 53, 28)" maxW="1200px">
            Under certain circumstances, the company may be required to disclose
            your personal data if required to do so by law or in response to
            valid requests by public authorities (e.g. a court or a government
            agency).
          </Text>
          <Heading pl="30px" fontSize="2xl">
            Other legal requirements
          </Heading>
          <Text pl="30px" color="rgb(142, 53, 28)" maxW="1200px">
            The company may disclose your personal data in the good faith belief
            that such action is necessary to:
          </Text>
          <List
            pl="40px"
            color="rgb(142, 53, 28)"
            maxW="1200px"
            spacing={3}
            styleType="disc"
          >
            <ListItem marginLeft="45px">
              Comply with a legal obligation
            </ListItem>
            <ListItem marginLeft="45px">
              Protect and defend the rights or property of the company
            </ListItem>
            <ListItem marginLeft="45px">
              Prevent or investigate possible wrongdoing in connection with the
              service
            </ListItem>
            <ListItem marginLeft="45px">
              Protect the personal safety of users of the service or the public
            </ListItem>
            <ListItem marginLeft="45px">
              Protect against legal liability
            </ListItem>
          </List>
          <Heading pl="30px" fontSize="3xl">
            Security of Your Personal Data
          </Heading>
          <Text pl="30px" color="rgb(142, 53, 28)" maxW="1200px">
            The security of your personal data is important to Us, but remember
            that no method of transmission over the internet, or method of
            electronic storage is 100% secure. While we strive to use
            commercially acceptable means to protect your personal data, we
            cannot guarantee its absolute security.
          </Text>
          <Heading pl="30px" fontSize="4xl">
            Children's Policy
          </Heading>
          <Text pl="30px" color="rgb(142, 53, 28)" maxW="1200px">
            Our service does not address anyone under the age of 13. We do not
            knowingly collect personally identifiable information from anyone
            under the age of 13. If You are a parent or guardian and you are
            aware that your child has provided us with personal data, please
            contact Us. If we become aware that we have collected personal data
            from anyone under the age of 13 without verification of parental
            consent, We take steps to remove that information from our servers.
          </Text>
          <Text pl="30px" color="rgb(142, 53, 28)" maxW="1200px">
            If We need to rely on consent as a legal basis for processing your
            information and your country requires consent from a parent, We may
            require your parent's consent before we collect and use that
            information.
          </Text>
          <Heading pl="30px" fontSize="4xl">
            Links to Other Websites
          </Heading>
          <Text pl="30px" color="rgb(142, 53, 28)" maxW="1200px">
            Our service may contain links to other websites that are not
            operated by us. If you click on a third party link, You will be
            directed to that third party's site. We strongly advise you to
            review the privacy policy of every site you visit.
          </Text>
          <Text pl="30px" color="rgb(142, 53, 28)" maxW="1200px">
            We have no control over and assume no responsibility for the
            content, privacy policies or practices of any third party sites or
            services.
          </Text>
          <Heading pl="30px" fontSize="4xl">
            Changes to this Privacy Policy
          </Heading>
          <Text pl="30px" color="rgb(142, 53, 28)" maxW="1200px">
            We may update our privacy policy from time to time. We will notify
            you of any changes by posting the new privacy policy on this page.
          </Text>
          <Text pl="30px" color="rgb(142, 53, 28)" maxW="1200px">
            We will let You know via email and/or a prominent notice on our
            service, prior to the change becoming effective and update the "Last
            updated" date at the top of this privacy policy.
          </Text>
          <Text pl="30px" color="rgb(142, 53, 28)" maxW="1200px">
            You are advised to review this Privacy Policy periodically for any
            changes. Changes to this privacy policy are effective when they are
            posted on this page.
          </Text>
          <Heading pl="30px" fontSize="4xl">
            Contact Us
          </Heading>
          <Text pl="30px" color="rgb(142, 53, 28)" maxW="1200px">
            If you have any questions about this privacy policy, You can contact
            us:
          </Text>
          <List
            pl="40px"
            color="rgb(142, 53, 28)"
            maxW="1200px"
            spacing={3}
            styleType="disc"
          >
            <ListItem marginLeft="45px">
              By email: roxannecollins198[at]gmail.com
            </ListItem>
          </List>
          <Text pl="30px" color="rgb(142, 53, 28)" maxW="1200px" pt="30px" pb="50px">
            Last Updated: 2024-09-12
          </Text>
        </Stack>
      </Center>
    </Stack>
  );
}
