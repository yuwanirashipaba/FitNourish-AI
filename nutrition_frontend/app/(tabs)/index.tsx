import React, { useState } from "react";
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { predictAndSave } from "../../src/api/client";

export default function PredictTab() {
  const [form, setForm] = useState({
    age: "25",
    gender: "Female",
    height_cm: "160",
    weight_kg: "60",
    goal: "Maintain",
    has_diabetes: "1",
    has_hypertension: "1",
    steps_per_day: "7500",
    active_minutes: "60",
    calories_burned_active: "400",
    resting_heart_rate: "72",
    avg_heart_rate: "92",
    stress_score: "55",
  });

  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  function update(key: string, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function toPayload() {
    return {
      age: Number(form.age),
      gender: form.gender,
      height_cm: Number(form.height_cm),
      weight_kg: Number(form.weight_kg),
      goal: form.goal,
      has_diabetes: Number(form.has_diabetes),
      has_hypertension: Number(form.has_hypertension),
      steps_per_day: Number(form.steps_per_day),
      active_minutes: Number(form.active_minutes),
      calories_burned_active: Number(form.calories_burned_active),
      resting_heart_rate: Number(form.resting_heart_rate),
      avg_heart_rate: Number(form.avg_heart_rate),
      stress_score: Number(form.stress_score),
    };
  }

  async function onPredictSave() {
    try {
      setLoading(true);
      const data = await predictAndSave(toPayload());
      setResult(data);
      Alert.alert("Saved ✅", `Record ID: ${data.saved_id}`);
    } catch (e: any) {
      Alert.alert("Error", e?.message || "Request failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Predict & Save</Text>

      {Object.keys(form).map((k) => (
        <View key={k} style={{ marginBottom: 10 }}>
          <Text style={styles.label}>{k}</Text>

          <TextInput
            value={(form as any)[k]}
            onChangeText={(v) => update(k, v)}
            style={styles.input}
            autoCapitalize="none"
            placeholderTextColor="#666"
          />
        </View>
      ))}

      <Pressable
        onPress={onPredictSave}
        disabled={loading}
        style={({ pressed }) => [
          styles.button,
          pressed && { opacity: 0.7 },
          loading && { opacity: 0.6 },
        ]}
      >
        <Text style={styles.buttonText}>
          {loading ? "Predicting..." : "Predict & Save"}
        </Text>
      </Pressable>

      {result && (
        <View style={styles.resultBox}>
          <Text style={styles.resultTitle}>Result</Text>
          <Text style={styles.resultText}>daily_kcal_need: {result.daily_kcal_need}</Text>
          <Text style={styles.resultText}>protein_g_per_day: {result.protein_g_per_day}</Text>
          <Text style={styles.resultText}>carbs_g_per_day: {result.carbs_g_per_day}</Text>
          <Text style={styles.resultText}>fat_g_per_day: {result.fat_g_per_day}</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    padding: 16,
    minHeight: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 10,
    color: "#000",
  },
  label: {
    marginBottom: 4,
    color: "#000",
  },
  input: {
    borderWidth: 1,
    borderColor: "#bbb",
    padding: 10,
    borderRadius: 10,
    color: "#000", // ✅ important (input text color)
    backgroundColor: "#fff",
  },
  button: {
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#000",
    alignItems: "center",
    marginTop: 8,
    backgroundColor: "#fff",
  },
  buttonText: {
    color: "#000",
    fontWeight: "600",
  },
  resultBox: {
    marginTop: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  resultTitle: {
    fontWeight: "700",
    marginBottom: 6,
    color: "#000",
  },
  resultText: {
    color: "#000",
  },
});
