
import { BatchConfig } from './types';

/**
 * ============================================================================
 *  INSTITUTION CONFIGURATION
 *  Update this section to customize the portal for your college.
 * ============================================================================
 */
export const INSTITUTION_CONFIG = {
  // Display Name appearing in the Header
  name: "RCAS Portal", 
  
  // URL to the college logo (Direct link to image)
  logoUrl: "https://drive.google.com/thumbnail?id=1jKlSs6QDTSQuf0LlZ9Yu5rPZVIv8G-oM&sz=w500" 
};

/**
 *  ADMIN AUTHENTICATION SHEET
 *  Sheet containing columns: Email Address, Password, Name, Department
 */
export const ADMIN_AUTH_CONFIG = {
  id: "1rkHuqB0EgAhdJhs15O_kZzVjJ2HfqQNPeI1NEqQQ67Y",
  name: "Admin_Credentials"
};

/**
 *  ELITE STUDENT AUTHENTICATION SHEET
 *  Sheet containing columns: Email Address, Name, Register No, Department, Password
 */
export const ELITE_AUTH_CONFIG = {
  id: "1nIkD73XZ9uykJ_LRJM0GGBJCd73nUh0_xf2-_PGKeVI",
  name: "Sheet1" 
};


/**
 * ============================================================================
 *  ACADEMIC DATA CONFIGURATION
 *  Manage Sheets, Batches, and Subject Definitions here.
 * ============================================================================
 */

export const BATCHES: BatchConfig[] = [
  // --------------------------------------------------------------------------
  // BATCH 1: 2025 - 2028 (1st Year)
  // --------------------------------------------------------------------------
  {
    id: 'batch-2025-2028',
    label: 'Batch 2025 - 2028 (1st Year)',
    semesters: {
      "1": { 
        label: "Semester 1", 
        internals: ["IP1", "IP2"],
        
        // --- SEMESTER 1 SHEETS ---
        rewardSheets: {
          IP1: { id: "1tG-bMYGzgAZYKV1X0vVpCSKaqn_5NgokeGpZNwkMqU4", name: "RCAS_1styear_IP1_RewardsSplit" },
          IP2: { id: "1yks1hpPHZPGDvqCLVmXfZCuKbEdXXzdpFKESmNvtSho", name: "RCAS_1styear_IP2_RewardsSplit"  }
        },
        
        internalMarksSheets: {
      IP1: {
      "B.Com": { id: "1be8kR6SPul4-mvyJIlaIDTqLaJdZPONmLcGHB0xeDkw", name: "B.Com" },
      "B.Com AF": { id: "1hQtZwHrmvlnY5V8qZNKJdwL9Z4M7QGir7CsT__YyXU8", name: "B.Com AF" },
      "B.Com BI": { id: "1QI2nHInNDcMz_nTQNxBvB5cHWS_CA5rG4yBDXVql--o", name: "B.Com BI" },
      "B.Com IB": { id: "13RV5fO8grrrypQGm4gnSnMh7F1uC6HIbM1JoyJghN78", name: "B.Com IB" },
      "B.Com BPS": { id: "1ZNMAuRu_e32h3vPCMtwMoVjXm-XyrHNp9L4cWDLVpVI", name: "B.Com BPS" },
      "B.Com CA": { id: "1hsdyuV-aUl0or7B5GrzFSylrWpFCF_S8ugyCuZs979s", name: "B.Com CA" },
      "B.Com CS": { id: "1WrG9Fo4DtVRyyYT_XfNedn9t2q-NMWTLuSrYyAs7vto", name: "B.Com CS" },
      "B.Com FS": { id: "1AhekXwoAVKb61g1EQFeiEW8LlNEv6bygTCCdRv21IpU", name: "B.Com FS" },
      "B.Com IT": { id: "1A3m25PsiFGerzKUQlvx17a7OhdKtECo1qW9EgEeuaHo", name: "B.Com IT" },
      "B.Com ACCA": { id: "1MtS2Rf4-I6-MIAlErzIQeTphGYaRDq7pSuSLqSi8h7k", name: "B.Com ACCA" },
      "B.Com PA": { id: "1Rx_aQod5zex6exWieVRID3f9vbTf-4M3NOzhGo1cIn8", name: "B.Com PA" }
          },
      IP2: {
      "B.Com": { id: "1ycyvrsblHq-x34U3JFYw0c2gyT9T6jmrxj4Bm9kZIEc", name: "B.Com" },
      "B.Com AF": { id: "1bC3jUPAVXRwSMEY925c8Oo4D8tIEEkl2XgobOPX9FSk", name: "B.Com AF" },
      "B.Com BI": { id: "1ivXqE3mpCsJduV8Kuy-Mje5HVkJub6JUAAP7GrUYLlY", name: "B.Com BI" },
      "B.Com IB": { id: "1sfkJ6j7-in9By5ksk6lUZjknVLnbwFki1-ELu2DoLM8", name: "B.Com IB" },
      "B.Com BPS": { id: "1PxjcIgi41BIT8oXxBJgH2x4FbopZ3jkElF3L5-xYImg", name: "B.Com BPS" },
      "B.Com CA": { id: "1N0UsEioVeG18Vbe2FwGWE2km5Gip1Hhdhaw63UhBco4", name: "B.Com CA" },
      "B.Com CS": { id: "13px8MbyjzklnHcqBD5AXHtioXZ7Uinf-07_t3V9z2f4", name: "B.Com CS" },
      "B.Com FS": { id: "1jvAjdKJwjF3bdkgwRJSnySfIMWLGBvNzSxnujJauV3M", name: "B.Com FS" },
      "B.Com IT": { id: "1H8lyz7GYi4LUJ8J8PIABMe3_wYs6gSG96z1eufYwg3g", name: "B.Com IT" },
      "B.Com ACCA": { id: "1cP_UM971iN1RHtMUB40mc6-D6pqAOnIomvm45K-rEIw", name: "B.Com ACCA" },
      "B.Com PA": { id: "16UeadwUdktBSkbODLKS1O_1AbTw4jqfKBAoCO-5q4mE", name: "B.Com PA" }
        }
        },

        // --- SEMESTER 1 SUBJECTS ---
        subjectConfig: {
          defaultMaxMarks: {
            Theory: 15,
            Lab: 15,
            "Lab + Theory": 15
          },
          departments: {
"B.Com CA": [
  { code: "25BCC1CA", type: "Theory", maxMarks: 15 },
  { code: "25BCC1CB", type: "Theory", maxMarks: 15 },
  { code: "25BCC1AA", type: "Theory", maxMarks: 15 },
  { code: "25BCC1ZP", type: "Lab", maxMarks: 15 },
  { code: "25BCM12E", type: "Theory", maxMarks: 15 },
  { code: "25BCM11T", type: "Theory", maxMarks: 15 }
],

"B.Com BPS": [
  { code: "25BPS1CA", type: "Theory", maxMarks: 15 },
  { code: "25BPS1CB", type: "Theory", maxMarks: 15 },
  { code: "25BPS1AA", type: "Theory", maxMarks: 15 },
  { code: "25BPS1ZP", type: "Lab", maxMarks: 15 },
  { code: "25BCM12E", type: "Theory", maxMarks: 15 },
  { code: "25BCM11T", type: "Theory", maxMarks: 15 }
],

"B.Com": [
  { code: "25BCM1CA", type: "Theory", maxMarks: 15 },
  { code: "25BCM1CB", type: "Theory", maxMarks: 15 },
  { code: "25BCM1AA", type: "Theory", maxMarks: 15 },
  { code: "25BCM1ZP", type: "Lab", maxMarks: 15 },
  { code: "25BCM12E", type: "Theory", maxMarks: 15 },
  { code: "25BCM11T", type: "Theory", maxMarks: 15 }
],

"B.Com ACCA": [
  { code: "25BAC1CA", type: "Theory", maxMarks: 15 },
  { code: "25BAC1CB", type: "Theory", maxMarks: 15 },
  { code: "25BAC1AA", type: "Theory", maxMarks: 15 },
  { code: "25BAC1ZP", type: "Lab", maxMarks: 15 },
  { code: "25BCM12E", type: "Theory", maxMarks: 15 },
  { code: "25BCM11T", type: "Theory", maxMarks: 15 }
],

"B.Com PA": [
  { code: "25BPA1CA", type: "Theory", maxMarks: 15 },
  { code: "25BPA1CB", type: "Theory", maxMarks: 15 },
  { code: "25BPA1AA", type: "Theory", maxMarks: 15 },
  { code: "25BPA1ZP", type: "Lab", maxMarks: 15 },
  { code: "25BCM12E", type: "Theory", maxMarks: 15 },
  { code: "25BCM11T", type: "Theory", maxMarks: 15 }
],

"B.Com AF": [
  { code: "25BAF1CA", type: "Theory", maxMarks: 15 },
  { code: "25BAF1CB", type: "Theory", maxMarks: 15 },
  { code: "25BAF1AA", type: "Theory", maxMarks: 15 },
  { code: "25BAF1ZP", type: "Lab", maxMarks: 15 },
  { code: "25BCM12E", type: "Theory", maxMarks: 15 },
  { code: "25BCM11T", type: "Theory", maxMarks: 15 }
],

"B.Com BI": [
  { code: "25BBI1CA", type: "Theory", maxMarks: 15 },
  { code: "25BBI1CB", type: "Theory", maxMarks: 15 },
  { code: "25BBI1AA", type: "Theory", maxMarks: 15 },
  { code: "25BBI1ZP", type: "Lab", maxMarks: 15 },
  { code: "25BCM12E", type: "Theory", maxMarks: 15 },
  { code: "25BCM11T", type: "Theory", maxMarks: 15 }
],

"B.Com CS": [
  { code: "25BCP1CA", type: "Theory", maxMarks: 15 },
  { code: "25BCP1CB", type: "Theory", maxMarks: 15 },
  { code: "25BCP1AA", type: "Theory", maxMarks: 15 },
  { code: "25BCP1ZP", type: "Lab", maxMarks: 15 },
  { code: "25BCM11T", type: "Theory", maxMarks: 15 },
  { code: "25BCM12E", type: "Theory", maxMarks: 15 }
],

"B.Com IB": [
  { code: "25BIB1CA", type: "Theory", maxMarks: 15 },
  { code: "25BIB1CB", type: "Theory", maxMarks: 15 },
  { code: "25BIB1AA", type: "Theory", maxMarks: 15 },
  { code: "25BIB1ZP", type: "Lab", maxMarks: 15 },
  { code: "25BCM12E", type: "Theory", maxMarks: 15 },
  { code: "25BCM11T", type: "Theory", maxMarks: 15 }
],

"B.Com IT": [
  { code: "25BSI1CA", type: "Theory", maxMarks: 15 },
  { code: "25BSI1CB", type: "Theory", maxMarks: 15 },
  { code: "25BSI1AA", type: "Theory", maxMarks: 15 },
  { code: "25BSI1ZA", type: "Theory", maxMarks: 15 },
  { code: "25BSI12E", type: "Theory", maxMarks: 15 },
  { code: "25BSI11T", type: "Theory", maxMarks: 15 }
],

"B.Com FS": [
  { code: "25BSF1CA", type: "Theory", maxMarks: 15 },
  { code: "25BSF1CB", type: "Theory", maxMarks: 15 },
  { code: "25BSF1AA", type: "Theory", maxMarks: 15 },
  { code: "25BSF1ZA", type: "Theory", maxMarks: 15 },
  { code: "25BSI12E", type: "Theory", maxMarks: 15 },
  { code: "25BSI11T", type: "Theory", maxMarks: 15 }
]
          }
        }
      }, 
        // --- END SEMESTER 1 ---
              // ============================================================
      // SEMESTER 2 (NEW — SAMPLE DATA, CHANGE SHEET IDs)
      // ============================================================

      "2": {

        label: "Semester 2",

        internals: ["IP1", "IP2"],

        rewardSheets: {

          IP1: {
            id: "1rFFJQGiEwHfPeHALY78ChUsG7NxmVpo2CrlpjWtS_Ew",
            name: "Semester2_IP1_Rewards"
          },

          IP2: {
            id: "",
            name: "Semester2_IP2_Rewards"
          }

        },


        internalMarksSheets: {

          IP1: {

            "B.Sc CS": {
              id: "PASTE_SEM2_IP1_CAS_INTERNAL_SHEET_ID",
              name: "B.Sc CS"
            },

            "B.Sc IT": {
              id: "PASTE_SEM2_IP1_IT_INTERNAL_SHEET_ID",
              name: "B.Sc IT"
            }

          },


          IP2: {

            "B.Sc CS": {
              id: "PASTE_SEM2_IP2_CAS_INTERNAL_SHEET_ID",
              name: "B.Sc CS"
            },

            "B.Sc IT": {
              id: "PASTE_SEM2_IP2_IT_INTERNAL_SHEET_ID",
              name: "B.Sc IT"
            }

          }

        },


        subjectConfig: {

          defaultMaxMarks: {
            Theory: 15,
            Lab: 15,
            "Lab + Theory": 15
          },

          departments: {

            "B.Sc CS": [
              { code: "25BCS2CA", type: "Theory", maxMarks: 15 },
              { code: "25BCS2CP", type: "Lab", maxMarks: 15 }
            ],

            "B.Sc IT": [
              { code: "25BIT2CA", type: "Theory", maxMarks: 15 },
              { code: "25BIT2CP", type: "Lab", maxMarks: 15 }
            ]

          }

        }
        
      }
    }
  },

  // ============================================================================
  //  INSTRUCTIONS FOR ADDING A NEW BATCH
  //  1. Copy the entire block below (starting from { id: 'batch-2024-2027', ... }).
  //  2. Paste it at the top or bottom of the BATCHES array.
  //  3. Update the 'id' (must be unique) and 'label'.
  //  4. Define the 'semesters' relevant for that batch (e.g., Semester 3, 4).
  //  5. Update the Sheet IDs and Subject Configs for that specific batch.
  // ============================================================================

  // --------------------------------------------------------------------------
  // BATCH 2: 2024 - 2027 (2nd Year) - DUMMY DATA EXAMPLE
  // --------------------------------------------------------------------------
  {
    id: 'batch-2024-2027',
    label: 'Batch 2024 - 2027 (2nd Year)',
    semesters: {
      "3": { 
        label: "Semester 3", 
        internals: ["IP1", "IP2"],
        
        // Reward Sheets for 2nd Year (using dummy IDs from 1st year for demo)
        rewardSheets: {
          "IP1": { id: "1SjZM-7RS3W4t_fideh5cRFr36PPI7RpraIiLXHVYpX4", name: "RCS_1styear_IP1_RewardsSplit" },
          "IP2": { id: "1cJc1Vc2PSAo6-SEcXlcsZadYqhUlGJSX_8R4jUnjzHA", name: "RCS_1styear_IP2_RewardsSplit" }
        },
        
        // Internal Marks for 2nd Year
        internalMarksSheets: {
          "IP1": {
            // Add other departments here...
            "B.Sc CS": { id: "1t4vis7wBV7GsfFSMIV3zjyGS3m9NXOWCt-hNXKRabMA", name: "B.Sc CS" },
            "B.Sc IT": { id: "1ZhgQe-wUxZYGwb5GT8wtVRcXIP6uO8vs-j3LCE2TLpo", name: "B.Sc IT" }
          }
        },

        // Subjects for 2nd Year, Semester 3
        subjectConfig: {
          defaultMaxMarks: {
            Theory: 50,
            Lab: 50,
            "Lab + Theory": 50
          },
          departments: {
            "B.Sc CS": [
              { code: "24BCS301", type: "Theory", maxMarks: 50 },
              { code: "24BCS302", type: "Lab", maxMarks: 50 },
              { code: "24BCS303", type: "Lab + Theory", maxMarks: 100 }
            ],
            "B.Sc IT": [
              { code: "24BIT301", type: "Theory", maxMarks: 50 },
              { code: "24BIT302", type: "Lab", maxMarks: 50 }
            ]
          }
        }
      }
    }
  }
];

export const CATEGORY_CODES = ['CD', 'PCDP', 'SM', 'AC', 'RPA', 'SPL', 'OT'];
export const SYSTEM_HEADER_LABELS = ["email address", "name", "register no", "department", "total"];
