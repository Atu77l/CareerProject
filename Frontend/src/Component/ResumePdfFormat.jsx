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
  },
  hobbies:{
    flexDirection:"row",
    marginLeft:5
  },
  skill:{
    // display: "grid",
    // gridTemplateColumns: "3fr 3fr 3fr 3fr 3fr",
    // gridGap: 20,
    flexDirection:"row",
    marginLeft:5
  },
  skillItem:{
    textAlign:"center",
    margin:5,
    padding:5,
    backgroundColor:"lightblue",
  }

});

const MyDocument = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
    <View style={styles.section}>
      <View style={styles.skill}>
      <View style={styles.section}>
       <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.title}>{data.title}</Text>
      </View>
      <View>
       <Text style={styles.text}>Email: {data.email}</Text>
       <Text style={styles.text}>Phone: {data.phone}</Text>
       <Text style={styles.linkedIn}>LinkedIn:{data.linkedIn}</Text>
       <Text style={styles.github}>Github:{data.github}</Text>
       </View>
       </View>
        <Text style={styles.horizontal}></Text>
        <Text style={styles.subtitle}>Education</Text>
        {
           data.education.map((item, id) => {
          return (

            <View key={item.id} style={styles.experience}>
              <Text style={styles.text}>Course: {item.course}</Text>
              <Text style={styles.text}>School/College: {item.school}</Text>
              <Text style={styles.text}>Percent: {item.percent}</Text>
              <Text style={styles.text}>Year: {item.year}</Text>

            </View>
          )
        })}
        <Text style={styles.horizontal}></Text>

        <Text style={styles.subtitle}>Experience</Text>
        {data.experience.map((exp, id) => {
          return (
            <View key={exp.id} style={styles.experience}>
              <Text styles={styles.box1}>
                <Text style={styles.experiencetitle}>Title: {exp.title}                                               </Text>
                <Text style={styles.box}>
                  <Text style={styles.text}>{exp.date}</Text>
                </Text>
              </Text>
              <Text style={styles.text}>Company: {exp.company}</Text>
              <Text style={styles.text}>Description: {exp.description}</Text>
            </View>
          )
        })}

        <Text style={styles.horizontal}></Text>

        <Text style={styles.subtitle}>Project</Text>
        {data.project.map((exp, id) => {
          return (
            <View key={exp.id} style={styles.experience}>
              <Text styles={styles.box1}>
                <Text style={styles.experiencetitle}>Project Name: {exp.title}                                                 </Text>
              </Text>
              <Text style={styles.text}>Tech Used: {exp.tech}</Text>
              <Text style={styles.text}>Description: {exp.description}</Text>
            </View>
          )
        }) }
        <Text style={styles.horizontal}></Text>

        <Text style={styles.subtitle}>Skills</Text>
        <div style={styles.skill}>
        { data.skills.map((skill, id) => {
          return (
            <View key={id} style={styles.skillItem}>
              <Text style={styles.text}>{skill}</Text>
            </View>
          )
        }) }
        </div>
        <Text style={styles.horizontal}></Text>

        <Text style={styles.subtitle}>Certifications</Text>
        { data.certifications.map((cert, id) => {
          return (
            <View key={cert.id} style={styles.experience}>
              <Text style={styles.heading}>{cert.title}</Text>
              <Text style={styles.text}>{cert.description}</Text>
            </View>
          )
        })}
        <Text style={styles.horizontal}></Text>

        <Text style={styles.subtitle}>Hobbies and Interest</Text>
        {data.hobbies.map((exp, id) => {
          return (
            <View key={exp.id} style={styles.hobbies}>
              <Text style={styles.text}>{exp}</Text>
            </View>
          )
        })}

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
