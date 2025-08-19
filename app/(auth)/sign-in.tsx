import CustomButton from '@/components/CustomButton';
import CustomInput from '@/components/CustomInput';
import { Link, router } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Text, View } from 'react-native';

export default function SignIn() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ email: '', password: '' });

  const submit = async () => {
    if (!form.email || !form.password) {
      return Alert.alert("Please fill in all fields");
    }

    setIsSubmitting(true);

    try {
      // TODO: Replace with Appwrite sign-in logic
      Alert.alert("User signed in successfully");

      router.replace('/');
    } catch (error: any) {
      Alert.alert("Error signing in", error?.message || 'Unknown error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <View className="gap-10 bg-white rounded-lg p-5 mt-5">
      <CustomInput
        placeholder="Enter your email"
        value={form.email}
        onChangeText={(text) => setForm((prev) => ({ ...prev, email: text }))}
        label="Email"
        keyboardType="email-address"
      />
      <CustomInput
        placeholder="Enter your password"
        value={form.password}
        onChangeText={(text) => setForm((prev) => ({ ...prev, password: text }))}
        label="Password"
        secureTextEntry
      />

      <CustomButton
        title="Sign In"
        isLoading={isSubmitting}
        onPress={submit} // ✅ Add the missing submit handler
      />

      <View className="flex justify-center flex-row mt-4 gap-2">
        <Text>Don't have an account?</Text>
        <Link href="/sign-up" className="base-bold text-primary">
          Sign Up
        </Link>
      </View>
    </View>
  );
}
