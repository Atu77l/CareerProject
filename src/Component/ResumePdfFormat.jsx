import React from "react";
import { PDFViewer, Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "white",
    padding: 5
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  title: {
    fontSize: 15,
    fontWeight: 600,
    marginBottom: 2,
    marginLeft: 10
  },
  name: {
    fontSize: 24,
    marginBottom: 5,
  },
  github: {
    color: "blue",
    fontSize: 12,
    marginBottom: 5
  },
  linkedIn: {
    color: "blue",
    fontSize: 12,
    marginBottom: 5

  },
  horizontal: {
    height: 2,
    backgroundColor: "black"
  },

  subtitle: {
    fontSize: 18,
    fontWeight: "300",
    marginBottom: 5
  },
  text: {
    fontSize: 12,
    marginBottom: 2
  },
  experiencetitle: {
    fontSize: 16,
    paddingRight: 900
  },
  heading: {
    fontWeight: 300,
    fontSize: 16
  }


});

const MyDocument = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
      <Text>Hello World</Text>
       <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.title}>{data.title}</Text>
       <Text style={styles.text}>Email: {data.email}</Text>
       <Text style={styles.text}>Phone: {data.phone}</Text>
       <Text style={styles.linkedIn}>LinkedIn:{data.linkedIn}</Text>
       <Text style={styles.github}>Github:{data.github}</Text>
        <Text style={styles.horizontal}></Text>
        <Text style={styles.subtitle}>Education</Text>
        {
          data.education.length > 0 ? data.education.map((item, id) => {
          return (

            <View key={item.id} style={styles.experience}>
              <Text style={styles.text}>Degree: {item.title}</Text>
              <Text style={styles.text}>School: {item.school}</Text>
              <Text style={styles.text}>Graduation Date: {item.graduationDate}</Text>
            </View>
          )
        }) : ""}
        <Text style={styles.horizontal}></Text>

        <Text style={styles.subtitle}>Experience</Text>
        {data.experience.length > 0 ? data.experience.map((exp, id) => {
          return (
            <View key={exp.id} style={styles.experience}>
              <Text styles={styles.box1}>
                <Text style={styles.experiencetitle}>Title: {exp.title}                                               </Text>
                <Text style={styles.box}>
                  <Text style={styles.text}>{exp.startDate}-</Text>
                  <Text style={styles.text}>{exp.endDate}</Text>
                </Text>
              </Text>
              <Text style={styles.text}>Company: {exp.company}</Text>
              <Text style={styles.text}>Description: {exp.description}</Text>
            </View>
          )
        }) : ""}

        <Text style={styles.horizontal}></Text>

        <Text style={styles.subtitle}>Project</Text>
        {data.experience.length > 0 ? data.experience.map((exp, id) => {
          return (
            <View key={exp.id} style={styles.experience}>
              <Text styles={styles.box1}>
                <Text style={styles.experiencetitle}>Title: {exp.title}                                                 </Text>
                <Text style={styles.box}>
                  <Text style={styles.text}>{exp.startDate}-</Text>
                  <Text style={styles.text}>{exp.endDate}</Text>
                </Text>
              </Text>
              <Text style={styles.text}>Company: {exp.company}</Text>
              <Text style={styles.text}>Description: {exp.description}</Text>
            </View>
          )
        }) : ""}
        <Text style={styles.horizontal}></Text>

        <Text style={styles.subtitle}>Skills</Text>
        {data.skills.length > 0 ? data.skills.map((skill, id) => {
          return (
            <View key={id} style={styles.experience}>
              <Text style={styles.text}>{skill}</Text>
            </View>
          )
        }) : ""}
        <Text style={styles.horizontal}></Text>

        <Text style={styles.subtitle}>Certifications</Text>
        {data.certifications.length > 0 ? data.certifications.map((cert, id) => {
          return (
            <View key={cert.id} style={styles.experience}>
              <Text style={styles.heading}>{cert.title}</Text>
              <Text style={styles.text}>{cert.description}</Text>
            </View>
          )
        }) : ""}
        <Text style={styles.horizontal}></Text>

        <Text style={styles.subtitle}>Hobbies and Interest</Text>
        {data.hobbies.length > 0 ? data.hobbies.map((exp, id) => {
          return (
            <View key={exp.id} style={styles.experience}>
              <Text style={styles.text}>{exp}</Text>
            </View>
          )
        }) : ""}

      </View>
    </Page>
  </Document>
);

const MyPdfViewer = (props) => (
  <PDFViewer style={{ width: "100%", height: "100vh" }}>
    <MyDocument data={props.resumedata} />
  </PDFViewer>
);

export default MyPdfViewer;
