import React, { useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import type { CameraView as CameraViewType } from 'expo-camera';

const MonitoramentoScreen: React.FC = () => {
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef<CameraViewType | null>(null);

  if (!permission) {
    return (
      <View style={styles.centered}>
        <Text>Verificando permissões...</Text>
      </View>
    );
  }

  if (!permission.granted) {
    return (
      <View style={styles.centered}>
        <Text>Permissão de câmera não concedida</Text>
        <Text onPress={() => requestPermission()}>Toque aqui para permitir</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Monitoramento em tempo real</Text>
      <CameraView
        style={styles.camera}
        facing="front"
        ref={cameraRef}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  camera: {
    flex: 1,
    borderRadius: 12,
    overflow: 'hidden',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MonitoramentoScreen;
