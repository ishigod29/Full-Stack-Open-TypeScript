import { Box, Card, Typography } from "@material-ui/core";
import React from "react";
import { useParams } from "react-router-dom";
import { useStateValue } from "../state";
import { Entry, Patient } from "../types";
import AddEntryForm from "./AddEntryForm";
import HealthCheck from "./HealthCheck";
import Hospital from "./Hospital";
import OccupationalHealthcare from "./OccupationalHealthcare";

const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  );
};

const EntryDetails: React.FC<{ entry: Entry }> = ({ entry }) => {
  switch (entry.type) {
    case 'Hospital':
      return <Hospital entry={entry} />;
    case 'OccupationalHealthcare':
      return <OccupationalHealthcare entry={entry} />;
    case 'HealthCheck':
      return <HealthCheck entry={entry} />;
    default:
      return assertNever(entry);
  }
};

const PatientInfo = () => {
  const [{ patients }] = useStateValue();
  const [{ diagnoses }] = useStateValue();
  const { id } = useParams<{ id: string }>();

  const patient: Patient | undefined = Object.values(patients).find(
    (patient: Patient) => patient.id === id
  );

  if (patient === null && patient === undefined) {
    return null;
  } else {
    return (
      <Box marginTop={5}>
        <Typography variant="h4">{patient?.name}</Typography>
        <Typography>({patient?.gender})</Typography>
        <Typography>ssh: {patient?.ssn}</Typography>
        <Typography>occupation: {patient?.occupation}</Typography>
        <Typography variant="h5">entries</Typography>
        <AddEntryForm patientId={patient?.id}/>
        {patient?.entries &&
          patient?.entries.map((e) => {
            return (
              <Box key={e.id} marginTop={4}>
                
                <Card>
                  {
                    Object.keys(diagnoses).length === 0 ? null : (
                      <EntryDetails entry={e}/>
                    )
                  }
                </Card>
              </Box>
            );
          })}
      </Box>
    );
  }
};

export default PatientInfo;
