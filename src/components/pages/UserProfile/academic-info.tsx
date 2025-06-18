import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import Input from "../../atoms/input";
import { autocompleteUniverity } from "../../../services/universities.service";
import { getAutocompleteCourses } from "../../../services/course.service";

interface IProps {
  courseId: number | null;
  setCourse: (id: number) => void;
  universityId: number | null;
  setUniversity: (id: number) => void;
  period: number | null;
  setPeriod: (id: number) => void;
  tuitionFee: number | null;
  setTuitionFee: (value: number) => void;
}

const AcademicInfo: React.FC<IProps> = ({
  courseId,
  setCourse,
  universityId,
  setUniversity,
  period,
  setPeriod,
  tuitionFee,
  setTuitionFee,
}) => {
  const [courseItems, setCourseItems] = useState<any[]>([]);
  const [universityItems, setUniversityItems] = useState<any[]>([]);

  const [openCourse, setOpenCourse] = useState(false);
  const [openUniversity, setOpenUniversity] = useState(false);
  const [openPeriod, setOpenPeriod] = useState(false);

  const [localCourseId, setLocalCourseId] = useState<number | null>(courseId);
  const [localUniversityId, setLocalUniversityId] = useState<number | null>(
    universityId
  );
  const [localPeriod, setLocalPeriod] = useState<number | null>(period);

  const loadCourses = () => {
    getAutocompleteCourses()
      .then(({data}: any) => {
        const formatted = data.map((data: any) => ({
          label: data.name,
          value: data.id,
        }));

        setCourseItems(formatted);
      })
      .catch((e) => console.error(e));
  };

  const loadUniversities = () => {
    autocompleteUniverity().then(({data}: any) => {
      const formatted = data.map((data: any) => ({
        label: data.name,
        value: data.id,
      }));
      setUniversityItems(formatted);
    });
  };

  useEffect(() => {
    if (localCourseId !== null) setCourse(localCourseId);
  }, [localCourseId]);

  useEffect(() => {
    if (localUniversityId !== null) setUniversity(localUniversityId);
  }, [localUniversityId]);

  useEffect(() => {
    if (localPeriod !== null) setPeriod(localPeriod);
  }, [localPeriod]);

  return (
    <View style={styles.form}>
      <Text style={styles.sectionLabel}>Informações acadêmicas</Text>

      <Text style={styles.label}>Curso Atual</Text>
      <View style={{ zIndex: 3000 }}>
        <DropDownPicker
          listMode="SCROLLVIEW"
          open={openCourse}
          value={localCourseId}
          items={courseItems}
          setOpen={setOpenCourse}
          setValue={setLocalCourseId}
          setItems={setCourseItems}
          onOpen={loadCourses}
          placeholder="Selecione um curso"
          style={styles.dropdown}
        />
      </View>
      <Text style={styles.label}>Instituição Atual</Text>
      <View style={{ zIndex: 2000 }}>
        <DropDownPicker
          listMode="SCROLLVIEW"
          open={openUniversity}
          value={localUniversityId}
          items={universityItems}
          setOpen={setOpenUniversity}
          setValue={setLocalUniversityId}
          onOpen={loadUniversities}
          setItems={setUniversityItems}
          placeholder="Selecione uma universidade"
          style={styles.dropdown}
        />
      </View>

      <Text style={styles.label}>Período</Text>
      <View style={{ zIndex: 1000 }}>
        <DropDownPicker
          listMode="SCROLLVIEW"
          open={openPeriod}
          value={localPeriod}
          items={[...Array(10)].map((_, i) => ({
            label: `${i + 1}º Período`,
            value: i + 1,
          }))}
          setOpen={setOpenPeriod}
          setValue={setLocalPeriod}
          placeholder="Selecione o período"
          style={styles.dropdown}
        />
      </View>
      <Text style={styles.label}>Mensalidade Atual</Text>
      <Input
        value={tuitionFee}
        onChangeText={setTuitionFee}
        keyboardType="numeric"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  form: { padding: 20, zIndex: 3000 },
  sectionLabel: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  label: { fontSize: 14, marginBottom: 5, color: "#333" },
  dropdown: {
    marginBottom: 15,
    zIndex: 100,
  },
});

export default AcademicInfo;
