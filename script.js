import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';
import data from './data.json';
import HomeIcon from './HomeIcon';
import LocationsIcon from './LocationsIcon';
import EventsIcon from './EventsIcon';

const Script = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    setLocations(data.locaties);
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
          <View key={index} style={styles.locationCard}>
            <Text style={styles.locationName}>{location.name}</Text>
            <Image 
              source={location.photo ? { uri: `assets/${location.photo}` } : require('./assets/no-image.png')}
              style={styles.locationPhoto} 
            />
            {location.description && <Text style={styles.locationDescription}>{location.description}</Text>}
            <Text style={styles.locationAddress}>{location.address}</Text>
            <TouchableOpacity onPress={() => openInGoogleMaps(location.name, location.address)} style={styles.routeButton}>
              <Text style={styles.routeButtonText}>Route</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      {/* Tabbalk */}
      <View style={styles.tabbar}>
        <TouchableOpacity style={styles.tabButton} onPress={() => {/* Handle tab press */}}>
          <HomeIcon fill="white" />
          <Text style={styles.tabButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton} onPress={() => {/* Handle tab press */}}>
          <LocationsIcon fill="white" />
          <Text style={styles.tabButtonText}>Locaties</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton} onPress={() => {/* Handle tab press */}}>
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
    paddingHorizontal: 20,
    paddingTop: 40, // Verhoogd van 20 naar 40 voor meer ruimte aan de bovenkant
    paddingBottom: 100, // Verhoogd van 70 naar 100 voor meer ruimte onderaan voor de tabbalk
  },
  locationCard: {
    marginBottom: 20,
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    elevation: 2,
  },
  locationName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  locationPhoto: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginTop: 10,
  },
  locationDescription: {
    marginTop: 10,
  },
  locationAddress: {
    marginTop: 10,
    color: '#888',
  },
  routeButton: {
    backgroundColor: '#db0a13',
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
  },
  routeButtonText: {
    color: '#ffffff',
    textAlign: 'center',
  },
  tabbar: {
    flexDirection: 'row', // Horizontale weergave
    justifyContent: 'space-between', // Verdelen van de ruimte tussen de items
    alignItems: 'center', // Verticaal centreren van de items
    backgroundColor: '#db0a13',
    paddingVertical: 20, // Verhoogd van 10 naar 20 voor een grotere tabbalk
    paddingHorizontal: 40,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
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
