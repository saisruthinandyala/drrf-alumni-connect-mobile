const jobs = [
 {
    job_id: 1234,
    company_name: 'JP Morgan Chase',
    designation: 'Assistant',
    location: 'Hyderabad',
    description: 'This idea of job is to do something that you love and is passionate about'
 },
{
    job_id: 1235,
    company_name: 'JP Morgan Chase',
    designation: 'Assistant',
    location: 'Hyderabad',
    description: 'This idea of job is to do something that you love and is passionate about'
 },
{
    job_id: 1236,
    company_name: 'JP Morgan Chase',
    designation: 'Assistant',
    location: 'Hyderabad',
    description: 'This idea of job is to do something that you love and is passionate about'
 },
{
    job_id: 1237,
    company_name: 'JP Morgan Chase',
    designation: 'Assistant',
    location: 'Hyderabad',
    description: 'This idea of job is to do something that you love and is passionate about'
 },
{
    job_id: 1238,
    company_name: 'JP Morgan Chase',
    designation: 'Assistant',
    location: 'Hyderabad',
    description: 'This idea of job is to do something that you love and is passionate about'
 },
{
    job_id: 1239,
    company_name: 'JP Morgan Chase',
    designation: 'Assistant',
    location: 'Hyderabad',
    description: 'This idea of job is to do something that you love and is passionate about'
 }
]

import { ScrollView, View, Text, Image } from 'react-native'
import { Card, ListItem, Icon, Button } from 'react-native-elements'
import React, { memo, useState } from 'react';
import { TouchableOpacity, StyleSheet} from 'react-native';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';
import { theme } from '../core/theme';


const JobSearch = ({ navigation }) => {
  return (
    <ScrollView>
    <Background>
        {jobs.map(j=>(
        <Card
          key={j.job_id}
          title={j.designation}
          style={{marginTop: 20 ,width: '95%'}} >
          <Text style={{marginBottom: 8}}>
                Company: {j.company_name}
            </Text>
            <Text style={{marginBottom: 8}}>
                Location: {j.location}
            </Text>
            <Text style={{marginBottom: 8}}>
                Description:{j.description}
            </Text>
          <Button
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='Apply Now' />
        </Card>))}
    </Background>
    </ScrollView>
        
  );
};

const styles = StyleSheet.create({
  label: {
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});

export default memo(JobSearch);
