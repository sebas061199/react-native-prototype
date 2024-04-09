import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';
import HomeIcon from './HomeIcon';
import LocationsIcon from './LocationsIcon';
import EventsIcon from './EventsIcon';

const Script = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch('./data.json')
      .then(response => response.json)
      .then(data => setLocations(data))
      .catch(error => console.error('Fetch failed', error));
  }, []);

  const openInGoogleMaps = (name, address) => {
    const googleMapsURL = `https://www.google.com/maps?q=${encodeURIComponent(name + ", " + address)}`;
    Linking.openURL(googleMapsURL);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Header</Text>
      </View>

      <ScrollView contentContainerStyle={styles.locationCardContainer}>
        {locations.map((location, index) => (
          <TouchableOpacity key={index} onPress={() => openInGoogleMaps(location.name, location.address)}>
            <View key={index} style={styles.locationCard}>
              <Text style={styles.locationName}>{location.name}</Text>
              <Image
                style={styles.locationPhoto}
                source={location.photo ? { uri: location.photo } : require('./Assets/no-image.png')}
              />
              {location.description && <Text style={styles.locationDescription}>{location.description}</Text>}
              <Text style={styles.locationAddress}>{location.address}</Text>
              <TouchableOpacity onPress={() => openInGoogleMaps(location.name, location.address)} style={styles.routeButton}>
                <Text style={styles.routeButtonText}>Route</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Tabbalk */}
      <View style={styles.tabbar}>
        <TouchableOpacity style={styles.tabButton} onPress={() => { /* Handle tab press */ }}>
          <HomeIcon fill="white" />
          <Text style={styles.tabButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton} onPress={() => { /* Handle tab press */ }}>
          <LocationsIcon fill="white" />
          <Text style={styles.tabButtonText}>Locaties</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton} onPress={() => { /* Handle tab press */ }}>
          <EventsIcon fill="white" />
          <Text style={styles.tabButtonText}>Events</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#db0a13',
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    color: '#ffffff',
    fontSize: 18,
  },
  locationCardContainer: {
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 140, // Extra padding om ruimte te maken voor de tabbalk
  },
  locationCard: {
    width: '100%',
    marginBottom: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  locationName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  locationPhoto: {
    width: '100%',
    height: 150,
    borderRadius: 5,
    marginBottom: 10,
  },
  locationDescription: {
    fontSize: 14,
    marginBottom: 10,
  },
  locationAddress: {
    fontSize: 12,
    color: '#888',
  },
  routeButton: {
    backgroundColor: '#db0a13',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  routeButtonText: {
    color: '#ffffff',
  },


  tabbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#db0a13',
    paddingVertical: 20,
    paddingHorizontal: 40,
    position: 'relative', // Verander de positie naar relative
    zIndex: 1000,
  },
  tabButton: {
    alignItems: 'center',
  },
  tabButtonText: {
    marginTop: 0,
    color: '#ffffff',
  },
});

export default Script;
